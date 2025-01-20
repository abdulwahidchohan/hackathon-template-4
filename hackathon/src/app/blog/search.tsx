import { NextResponse } from 'next/server';
import productData from '@/data/productData'; // Import the data correctly

// This is a mock product list. Replace this with your actual data fetching logic.
const products = productData;

export async function GET() {
  return NextResponse.json(products);
}
