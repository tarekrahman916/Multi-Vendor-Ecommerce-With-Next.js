import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const newCategory = { title, slug, imageUrl, description, isActive };
    console.log(newCategory);
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
