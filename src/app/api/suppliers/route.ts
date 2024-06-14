import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const {
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
    } = await request.json();
    const newSupplier = {
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
    };
    console.log(newSupplier);
    return NextResponse.json(newSupplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Supplier created failed",
        error,
      },
      { status: 500 }
    );
  }
}
