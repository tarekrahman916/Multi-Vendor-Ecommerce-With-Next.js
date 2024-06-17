import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: any) {
  try {
    // extract the credentials from the user request
    const { name, email, password, role } = await request.json();

    // Check the user already exist
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exist",
        },
        {
          status: 409,
        }
      );
    }
    // Encrypt the password=>Bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: { name, email, password: hashedPassword, role },
    });
    console.log(newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "User Created Successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: any) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Users",
        error,
      },
      { status: 500 }
    );
  }
}
