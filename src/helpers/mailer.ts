import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export enum EmailType {
  VERIFY = "verify",
  RESET = "reset",
}

type SendEmailParams = {
  email: string;
  emailType: EmailType;
  userId: string;
};

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: SendEmailParams) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    if (emailType === EmailType.VERIFY) {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === EmailType.RESET) {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "054e62b28dbd76",
        pass: "990c81783a5ee7",
      },
    });

    const mailOptions = {
      from: "raviganeshmbhat999@gmail.com",
      to: email,
      subject:
        emailType === EmailType.VERIFY
          ? "Verify your email"
          : "Reset your password",
      html: `<p>CLick <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === EmailType.VERIFY
          ? "verify your email"
          : "reset your password"
      } or copy and paste the link below i your browser.
        <br>
        ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
