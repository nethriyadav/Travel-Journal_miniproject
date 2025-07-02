const nodemailer = require("nodemailer");
const { htmlToText } = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `Vinay Vennampally <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
        tls: {
    rejectUnauthorized: false, // Add only if needed
  },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(subject, message) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(
      "Welcome to the Travel Jornal  Family",
      "Thank you for joining Travel Jornal ! We are excited to have you."
    );
  }

  async sendPasswordReset() {
    await this.send(
      "Your Password Reset Token (Valid for only 10 min)",
      `Please use the following link to reset your password: ${this.url}`
    );
  }

  async sendEmailVerification() {

      const html = `
    <h1>Hello ${this.firstName},</h1>
    <p>Please verify your email to the Travel Joural app by clicking the link below:</p>
    <a href="${this.url}" target="_blank" style="display:inline-block; padding:10px 20px; background:#4CAF50; color:#fff; text-decoration:none; border-radius:5px;">Verify Email</a>
    <p>If you did not request this, please ignore this email.</p>
  `;


  await this.send(
    "Verify Your Email",
    html
  );
}

async sendOtp() {
  await this.send(
    "Your Login OTP for Travel Journal",
    `Your OTP is <strong>${this.url}</strong>. It is valid for 10 minutes.`
  );
}


};
