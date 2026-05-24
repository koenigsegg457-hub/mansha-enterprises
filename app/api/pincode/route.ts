import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const PINCODE_DATA: Record<string, { city: string; state: string }> = {
  "110": { city: "Delhi", state: "Delhi" },
  "121": { city: "Faridabad", state: "Haryana" },
  "122": { city: "Gurugram", state: "Haryana" },
  "201": { city: "Noida / Ghaziabad", state: "Uttar Pradesh" },
  "226": { city: "Lucknow", state: "Uttar Pradesh" },
  "302": { city: "Jaipur", state: "Rajasthan" },
  "400": { city: "Mumbai", state: "Maharashtra" },
  "411": { city: "Pune", state: "Maharashtra" },
  "452": { city: "Indore", state: "Madhya Pradesh" },
  "462": { city: "Bhopal", state: "Madhya Pradesh" },
  "500": { city: "Hyderabad", state: "Telangana" },
  "560": { city: "Bengaluru", state: "Karnataka" },
  "600": { city: "Chennai", state: "Tamil Nadu" },
  "700": { city: "Kolkata", state: "West Bengal" },
};

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code || code.length !== 6) {
    return NextResponse.json(
      { success: false, error: "Invalid pincode" },
      { status: 400 }
    );
  }

  const prefix = code.slice(0, 3);
  const location = PINCODE_DATA[prefix];

  return NextResponse.json({
    success: true,
    city: location?.city || "Your City",
    state: location?.state || "Your State",
  });
}