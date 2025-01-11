import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import Delivery from '@/models/Delivery'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const payload = await request.json()

    // Log the incoming webhook
    console.log('Webhook received:', {
      type: payload._type,
      id: payload._id,
      rev: payload._rev
    })

    // Handle different operations
    if (payload._type === 'product') {
      const result = await Product.findOneAndUpdate(
        { _id: payload._id },
        payload,
        { upsert: true, new: true }
      )
      return NextResponse.json({ success: true, result })
    }

    if (payload._type === 'delivery') {
      const result = await Delivery.findOneAndUpdate(
        { _id: payload._id },
        payload,
        { upsert: true, new: true }
      )
      return NextResponse.json({ success: true, result })
    }

    return NextResponse.json({ error: 'Invalid document type' }, { status: 400 })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      error: 'Webhook processing failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 