import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getZone(pincode: string): { charge: number; zone: string; estimatedDays: string } {
  // LOCAL — Faridabad + immediate neighbours
  const local = ["121", "122", "201"];
  if (local.some((p) => pincode.startsWith(p))) {
    return { charge: 59, zone: "Local", estimatedDays: "2" };
  }

  // ZONE A — Delhi NCR + nearby Haryana/UP
  const zoneA = [
    "110", "111", "112", "113", "114", "115", "116", "117", "119",
    "200", "202", "203",
    "131", "132", "124", "125", "123",
  ];
  if (zoneA.some((p) => pincode.startsWith(p))) {
    return { charge: 79, zone: "NCR", estimatedDays: "2-3" };
  }

  // ZONE B — North India
  const zoneB = ["1", "2", "30", "31", "32", "33", "34", "35", "16", "17", "18", "19"];
  if (zoneB.some((p) => pincode.startsWith(p))) {
    return { charge: 99, zone: "North India", estimatedDays: "3-4" };
  }

  // ZONE D — Remote
  const zoneD = ["79", "78", "74", "75", "76", "744", "682"];
  if (zoneD.some((p) => pincode.startsWith(p))) {
    return { charge: 159, zone: "Remote", estimatedDays: "7-10" };
  }

  // ZONE C — Rest of India (default)
  return { charge: 129, zone: "Rest of India", estimatedDays: "4-5" };
}

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

    if (pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { error: "Please enter a valid 6-digit pincode" },
        { status: 400 }
      );
    }

    const { charge, zone, estimatedDays } = getZone(pincode);

    let shippingCharge = charge;

    // Extra charge for heavier orders (> 1 kg)
    if (Number(weight) > 1) {
      shippingCharge += 30;
    }

    return NextResponse.json({
      shippingCharge,
      courierName: `Standard Courier (${zone})`,
      estimatedDays,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not calculate shipping charge" },
      { status: 500 }
    );
  }
}