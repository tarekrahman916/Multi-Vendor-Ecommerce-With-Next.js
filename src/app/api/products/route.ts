import { NextResponse } from "next/server";

export async function POST(request: any) {
  // {
  //   title,
  //   slug,
  //   sku,
  //   barcode,
  //   imageUrl,
  //   productPrice,
  //   salePrice,
  //   category,
  //   supplier,
  //   description,
  // }
  try {
    const productData = await request.json();

    console.log(productData);
    return NextResponse.json(productData);
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
