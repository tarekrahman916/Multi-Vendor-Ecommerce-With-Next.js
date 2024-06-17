import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  /**
    name,
      phone,
      email,
      physicalAddress,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      code,
      isActive,
      profileImageUrl,
      products,
      landSize,
      mainCrop,
      userId,
   */
  try {
    const supplierData = await request.json();
    const newSupplierProfile = await db.supplierProfile.create({
      data: {
        name: supplierData.name,
        phone: supplierData.phone,
        email: supplierData.email,
        profileImageUrl: supplierData.profileImageUrl,
        physicalAddress: supplierData.physicalAddress,
        contactPerson: supplierData.contactPerson,
        contactPersonPhone: supplierData.contactPersonPhone,
        terms: supplierData.terms,
        notes: supplierData.notes,
        code: supplierData.code,
        products: supplierData.products,
        landSize: parseFloat(supplierData.landSize),
        mainCrop: supplierData.mainCrop,
        isActive: supplierData.isActive,
        userId: supplierData.userId,
      },
    });
    console.log(newSupplierProfile);
    return NextResponse.json(newSupplierProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Supplier Profile",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: any) {
  try {
    const profiles = await db.supplierProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(profiles);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Supplier Profiles",
        error,
      },
      { status: 500 }
    );
  }
}
