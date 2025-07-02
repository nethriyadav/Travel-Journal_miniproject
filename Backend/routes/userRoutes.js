const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const likesController = require("./../controllers/likesController");

const router = express.Router();

router.get(
  "/me",
  authController.protect,
  userController.getMe,
  userController.getUser
);

router.get('/verify-email/:token', authController.verifyEmail);

router.post("/verify-otp", authController.verifyOtp);


router.post("/signup", authController.signUp);

router.post("/login", authController.login);

router.get("/logout", authController.logout);

router.post("/forgotPassword", authController.forgotPassword);

router.patch("/resetPassword/:token", authController.resetPassword);

// protect all the routers after this middleware.....alternate short hand of putting authcontroller.protect in every below middlewares
router.use(authController.protect);

router.get("/mylikes", likesController.getUserLikedJournals);

router.patch("/updateMyPassword", authController.updatePassword);

router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);

router.delete("/deleteMe", userController.deleteMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route(`/:id`)
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
