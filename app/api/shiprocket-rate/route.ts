import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { deliveryPincode, weight } = await req.json();

    if (!deliveryPincode) {
      return NextResponse.json(
        { error: "Delivery pincode is required" },
        { status: 400 }
      );
    }

    const pincode = String(deliveryPincode).trim();

    let shippingCharge = 120;

    if (pincode.startsWith("110")) {
      shippingCharge = 60;
    } else if (pincode.startsWith("12") || pincode.startsWith("20")) {
      shippingCharge = 90;
    } else {
      shippingCharge = 120;
    }

    if (Number(weight) > 1) {
      shippingCharge += 40;
    }

    return NextResponse.json({
      shippingCharge,
      courierName: "Manual Shipping Estimate",
      estimatedDeliveryDays: "3-7 days",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not calculate shipping charge" },
      { status: 500 }
    );
  }
}