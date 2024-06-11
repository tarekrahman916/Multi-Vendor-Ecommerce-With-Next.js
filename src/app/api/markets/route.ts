import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { title, slug, imageUrl, description } = await request.json();
    const newCategory = { title, slug, imageUrl, description };
    console.log(newCategory);
    return NextResponse.json(newCategory);
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
