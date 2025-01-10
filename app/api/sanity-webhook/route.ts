import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import Delivery from '@/models/Delivery'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const body = await request.json()
    
    console.log('Webhook payload:', body)
    const headers = Object.fromEntries(request.headers)
    console.log('Webhook headers:', headers)

    if (!body._type || !body._id) {
      console.error('Missing required fields:', body)
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (body._type === 'product') {
      const product = await Product.findOneAndUpdate(
        { _id: body._id },
        body,
        { upsert: true, new: true }
      )
      console.log('Updated product:', product)
      return NextResponse.json({ success: true, product })
    } 
    
    if (body._type === 'delivery') {
      const delivery = await Delivery.findOneAndUpdate(
        { _id: body._id },
        body,
        { upsert: true, new: true }
      )
      console.log('Updated delivery:', delivery)
      return NextResponse.json({ success: true, delivery })
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