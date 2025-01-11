import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import Delivery from '@/models/Delivery'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const payload = await request.json()

    // Log the incoming webhook
    console.log('Document received:', {
      type: payload._type,
      id: payload._id
    })

    // Handle different document types
    const Model = payload._type === 'product' ? Product : Delivery
    
    // Update or create document
    const result = await Model.findOneAndUpdate(
      { _id: payload._id },
      payload,
      { upsert: true, new: true }
    )

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      error: 'Processing failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 