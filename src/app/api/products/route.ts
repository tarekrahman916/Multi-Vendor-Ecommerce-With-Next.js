import db from "@/lib/db";
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
      categoryId,
      supplierId,
      tags,
      description,
      isActive,
      isWholesale,
      wholesalePrice,
      wholesaleQty,
      unit,
      productCode,
      productStock,
      qty,
    } = await request.json();
    // Check if this product already exist in the db
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });

    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exist",
        },
        { status: 409 }
      );
    }

    const newProduct = await db.product.create({
      data: {
        title,
        slug,
        sku,
        barcode,
        imageUrl,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        categoryId,
        userId: supplierId,
        tags,
        description,
        isActive,
        isWholesale,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        unit,
        productCode,
        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });

    console.log(newProduct);
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

export async function GET(request: any) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Products",
        error,
      },
      { status: 500 }
    );
  }
}
