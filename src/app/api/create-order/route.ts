import { NextResponse } from "next/server";
// import Razorpay from "razorpay";

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID || "",
//   key_secret: process.env.RAZORPAY_KEY_SECRET || "",
// });

const roomPrices: Record<string, number> = {
  "misty-deluxe": 3499,
  "valley-suite": 5999,
  "hillside-villa": 8999,
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { room, checkin, checkout } = body;

    const pricePerNight = roomPrices[room] || 3499;

    const nights = Math.max(
      1,
      Math.ceil(
        (new Date(checkout).getTime() - new Date(checkin).getTime()) /
          (1000 * 60 * 60 * 24)
      )
    );

    const amount = pricePerNight * nights * 100;

    // Razorpay integration will be implemented later.
    // const order = await razorpay.orders.create({
    //   amount,
    //   currency: "INR",
    //   receipt: `vd_${Date.now()}`,
    //   notes: {
    //     room,
    //     checkin,
    //     checkout,
    //     name: body.name,
    //     email: body.email,
    //   },
    // });

    return NextResponse.json({
      success: true,
      amount,
      room,
      checkin,
      checkout,
      nights,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}