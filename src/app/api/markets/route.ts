import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { title, slug, logoUrl, categoryIds, description, isActive } =
      await request.json();
    const existingMarket = await db.market.findUnique({
      where: {
        slug,
      },
    });

    if (existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market already exist",
        },
        { status: 409 }
      );
    }
    const newMarket = await db.market.create({
      data: { title, slug, logoUrl, description, categoryIds, isActive },
    });
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create market",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: any) {
  try {
    const markets = await db.market.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(markets);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Markets",
        error,
      },
      { status: 500 }
    );
  }
}
