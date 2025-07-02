const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const AppError = require("./../utils/appError");
const { promisify } = require("util");
const crypto = require("crypto");
const Email = require("./../utils/email");

const catchAsync = require("./../utils/catchAsync");
const { decode } = require("punycode");
const { create } = require("domain");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") 
  {cookieOptions.secure = true;
      cookieOptions.sameSite = "None";
  }
  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;
  res.status(statusCode).json({
    status: "Success",
    token,
    data: {
      user,
    },
  });
};

// exports.signUp = catchAsync(async (req, res, next) => {
//   // console.log("Request Body:", req.body);
//   const newUser = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     passwordConfirm: req.body.passwordConfirm,
//     passwordChangedAt: req.body.passwordChangedAt,
//   });

//   const url = `${req.protocol}://${req
//     .get("host")
//     .replace("127.0.0.1", "localhost")}/me`;
//   console.log(url);
//   await new Email(newUser, url).sendWelcome();

//   createSendToken(newUser, 201, res);
// });


exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  const verificationToken = newUser.createEmailVerificationToken();
  await newUser.save({ validateBeforeSave: false });

  const verificationURL = `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${verificationToken}`;
  await new Email(newUser, verificationURL).sendEmailVerification();

  res.status(201).json({
    status: "success",
    message: "Verification email sent! Please check your inbox to activate your account."
  });
});



exports.verifyEmail = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpires: { $gt: Date.now() }
  });

  // if (!user) {
  //   return next(new AppError("Token is invalid or has expired", 400));
  // }


  if (!user) {
    // Send error HTML instead of JSON error
    return res.status(400).send(`
      <div style="font-family:sans-serif; text-align:center; margin-top:100px;">
        <h1 style="color:red;">&#10060; Token is invalid or has expired</h1>
        <p>Please request a new verification email.</p>
      </div>
    `);
  }

  user.isVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save();

  // createSendToken(user, 200, res);

  // res.send(`
  //   <div style="font-family:sans-serif; text-align:center; margin-top:100px;">
  //     <h1 style="color:green;">&#10004; Email Verified Successfully!</h1>
  //     <p>Welcome to Travel Journal. Your email has been confirmed.</p>
  //   </div>
  // `);

  res.redirect("http://localhost:5173/verify-success");

});




exports.verifyOtp = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return next(new AppError("Please provide email and OTP", 400));
  }

  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

  const user = await User.findOne({
    email,
    otp: hashedOtp,
    otpExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Invalid or expired OTP", 400));
  }

  // Clear OTP fields after successful verification
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save({ validateBeforeSave: false });

  // Create JWT and send token (login complete)
  createSendToken(user, 200, res);
});





exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please Provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password +otp +otpExpires");
  console.log(user);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  if (!user.isVerified) {
    return next(new AppError("Please verify your email to login.", 401));
  }

  const otp=Math.floor(100000+Math.random()*900000).toString();


   user.otp = crypto.createHash("sha256").update(otp).digest("hex");
  user.otpExpires = Date.now() + 10 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  // Send OTP email
  await new Email(user, otp).sendOtp();

  // Respond asking user to verify OTP
  res.status(200).json({
    status: "success",
    message: "OTP sent to your email. Please verify to complete login.",
  });

  // createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(
      new AppError("You are not logged in!. Please login to get access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);
  // It contains the payload of JWT like id,iat,etc..
  const currentUser = await User.findById(decoded.id);
  console.log(`Current User from db :  ${currentUser}`);
  console.log("User Query Result:", await User.findById(decoded.id));
  if (!currentUser) {
    return next(
      new AppError("The User belonging to this token no longer exists!", 401)
    );
  }

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "User recently changed the password!. Please log in again",
        401
      )
    );
  }

  //Grant access to protected route
  req.user = currentUser;
  res.locals.user = currentUser;
  console.log(req.user);
  next();
});

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) return next();

      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }
      (req.user = currentUser), (res.locals.user = currentUser);
      console.log(req.user);
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.logout = (req, res, next) => {
  res.cookie("jwt", "loggedOut", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  // res.setHeader("Authorization", "");
  res.status(200).json({
    status: "Success",
  });
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You dont have permission to perform this action", 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with this email address", 404));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    const resetURL = `${req.protocol}://${req
      .get("host")
      .replace(
        "127.0.0.1",
        "localhost"
      )}/api/v1/users/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "Success",
      message: "Token sent to email!",
    });
    next();
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError("There was an error sending the email. Try again later !"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  createSendToken(user, 200, res);
  next();
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError("Your current password is wrong", 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  createSendToken(user, 200, res);
});
