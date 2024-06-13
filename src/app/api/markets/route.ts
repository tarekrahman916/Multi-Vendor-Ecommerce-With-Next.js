import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const newMarket = await request.json();
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Market created failed",
        error,
      },
      { status: 500 }
    );
  }
}
