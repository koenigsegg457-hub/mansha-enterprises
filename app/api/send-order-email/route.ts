import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const {
      customer,
      cartItems,
      cartTotal,
      shippingInfo,
      finalTotal,
      paymentId,
    } = await req.json();

    if (!process.env.RESEND_API_KEY || !process.env.ORDER_EMAIL_TO) {
      return NextResponse.json(
        { error: "Email environment variables are missing" },
        { status: 500 }
      );
    }

    const orderLines = cartItems
      .map(
        (item: any, index: number) =>
          `${index + 1}. ${item.name} x${item.quantity} - ₹${
            item.price * item.quantity
          }`
      )
      .join("<br />");

    const deliveryDays = `${shippingInfo?.zone?.minDays ?? ""}${
      shippingInfo?.zone?.minDays !== shippingInfo?.zone?.maxDays
        ? `-${shippingInfo?.zone?.maxDays}`
        : ""
    } working days`;

    await resend.emails.send({
      from: "Glowra Orders <onboarding@resend.dev>",
      to: process.env.ORDER_EMAIL_TO,
      subject: `🛒 Order ${paymentId} - ₹${finalTotal}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Paid Order Received</h2>

          <h3>Customer Details</h3>
          <p>
            <strong>Name:</strong> ${customer.name}<br />
            <strong>Phone:</strong> ${customer.phone}<br />
            <strong>Email:</strong> ${customer.email || "Not provided"}
          </p>

          <h3>Delivery Address</h3>
          <p>
            ${customer.address}<br />
            ${customer.city}, ${customer.state} - ${customer.pincode}
          </p>

          <h3>Order Details</h3>
          <p>${orderLines}</p>

          <h3>Payment & Delivery</h3>
          <p>
            <strong>Payment ID:</strong> ${paymentId}<br />
            <strong>Products Total:</strong> ₹${cartTotal}<br />
            <strong>Shipping:</strong> ₹${shippingInfo?.zone?.charge || 0}<br />
            <strong>Estimated Delivery:</strong> ${deliveryDays}<br />
            <strong>Final Total:</strong> ₹${finalTotal}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Order email error:", error);

    return NextResponse.json(
      { error: "Failed to send order email" },
      { status: 500 }
    );
  }
}
