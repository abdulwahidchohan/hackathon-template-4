import { shipEngine } from "@/app/lib/helper/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { rateId } = await req.json();
    const label = await shipEngine.createLabelFromRate({ rateId });
    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
    }
}