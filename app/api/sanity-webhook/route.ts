import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import Delivery from '@/models/Delivery'
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const isAuthenticated = await auth(request)
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()
    const payload = await request.json()

    console.log('Webhook received:', {
      type: payload._type,
      id: payload._id
    })

    if (!payload._type || !payload._id) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    const Model = payload._type === 'product' ? Product : Delivery
    
    const result = await Model.findOneAndUpdate(
      { _id: payload._id },
      payload,
      { upsert: true, new: true }
    )

    console.log('Document updated:', result._id)
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      error: 'Processing failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 