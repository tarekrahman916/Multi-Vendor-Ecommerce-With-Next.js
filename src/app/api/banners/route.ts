import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  console.log(request);
  try {
    const { title, link, imageUrl, isActive } = await request.json();
    const newBanner = await db.banner.create({
      data: { title, link, imageUrl, isActive },
    });
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Banner",
        error,
      },
      { status: 500 }
    );
  }
}
