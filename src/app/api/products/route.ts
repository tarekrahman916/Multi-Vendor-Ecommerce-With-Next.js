import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const {
      title,
      slug,
      sku,
      barcode,
      imageUrl,
      productPrice,
      salePrice,
      category,
      supplier,
      tags,
      description,
      isActive,
    } = await request.json();

    const newProduct = {
      title,
      slug,
      sku,
      barcode,
      imageUrl,
      productPrice,
      salePrice,
      category,
      supplier,
      tags,
      description,
      isActive,
    };
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Category created product",
        error,
      },
      { status: 500 }
    );
  }
}
