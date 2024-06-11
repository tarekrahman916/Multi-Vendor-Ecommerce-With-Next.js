import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { title, couponCode, expiryDate } = await request.json();
    const newCoupon = { title, couponCode, expiryDate };
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Coupon created failed",
        error,
      },
      { status: 500 }
    );
  }
}
