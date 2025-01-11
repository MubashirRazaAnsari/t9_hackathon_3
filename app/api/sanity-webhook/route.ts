import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import Delivery from '@/models/Delivery'
import { auth } from '@/lib/auth'

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
      'Access-Control-Allow-Credentials': 'true',
    },
  })
}

export async function POST(request: Request) {
  try {
    const isAuthenticated = await auth(request)
    if (!isAuthenticated) {
      console.error('Authentication failed')
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