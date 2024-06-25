import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const existingCategory = await db.category.findUnique({
      where: {
        slug,
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Category already exist",
        },
        { status: 409 }
      );
    }

    const newCategory = await db.category.create({
      data: { title, slug, imageUrl, description, isActive },
    });

    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Category created failed",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: any) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Categories",
        error,
      },
      { status: 500 }
    );
  }
}
