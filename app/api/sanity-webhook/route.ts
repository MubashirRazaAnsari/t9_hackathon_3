import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import Delivery from '@/models/Delivery'
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const isAuthenticated = await auth(request)
    if (!isAuthenticated) {
      console.log('Unauthorized webhook request')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()
    const body = await request.json()
    
    console.log('Webhook payload:', body)
    console.log('Document type:', body._type)
    console.log('Document ID:', body._id)

    if (!body._type || !body._id) {
      console.error('Missing required fields:', body)
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let result
    if (body._type === 'product') {
      result = await Product.findOneAndUpdate(
        { _id: body._id },
        { ...body, updatedAt: new Date() },
        { upsert: true, new: true }
      )
      console.log('Updated/Created product:', result)
    } 
    else if (body._type === 'delivery') {
      result = await Delivery.findOneAndUpdate(
        { _id: body._id },
        { ...body, updatedAt: new Date() },
        { upsert: true, new: true }
      )
      console.log('Updated/Created delivery:', result)
    }
    else {
      console.error('Invalid document type:', body._type)
      return NextResponse.json({ error: 'Invalid document type' }, { status: 400 })
    }

    if (!result) {
      console.error('Failed to save document')
      return NextResponse.json({ error: 'Failed to save document' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      error: 'Webhook processing failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 