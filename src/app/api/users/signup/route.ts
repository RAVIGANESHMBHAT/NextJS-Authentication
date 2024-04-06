import { EmailType, sendEmail } from "@/helpers/mailer";
import { NextRequest, NextResponse } from "next/server";

import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log({ username, email, password });

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log({ savedUser });

    // Send verification email
    await sendEmail({
      email,
      emailType: EmailType.VERIFY,
      userId: savedUser._id,
    });

    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      user: savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
