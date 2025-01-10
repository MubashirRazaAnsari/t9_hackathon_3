import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Delivery from '@/models/Delivery';
import { auth } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();
    const deliveries = await Delivery.find({}).select('-createdAt -updatedAt -__v');
    return NextResponse.json(deliveries);
  } catch (error) {
    console.error('Deliveries GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch deliveries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const isAuthenticated = await auth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const data = await request.json();
    const delivery = await Delivery.create(data);
    return NextResponse.json(delivery, { status: 201 });
  } catch (error) {
    console.error('Deliveries POST error:', error);
    return NextResponse.json({ error: 'Failed to create delivery' }, { status: 500 });
  }
}
