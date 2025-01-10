import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import Delivery from '@/models/Delivery'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const body = await request.json()
    
    // Log webhook payload for debugging
    console.log('Webhook payload:', body)

    if (body._type === 'product') {
      await Product.findOneAndUpdate(
        { _id: body._id },
        body,
        { upsert: true }
      )
    } else if (body._type === 'delivery') {
      await Delivery.findOneAndUpdate(
        { _id: body._id },
        body,
        { upsert: true }
      )
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
} 