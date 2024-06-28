// @ts-nocheck
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Category",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingCategory = await db.category.findUnique({
      where: {
        id,
      },
    });

    if (!existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Category Not Found",
        },
        { status: 404 }
      );
    }
    const deleteCategory = await db.category.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deleteCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete the Category",
        error,
      },
      { status: 500 }
    );
  }
}
