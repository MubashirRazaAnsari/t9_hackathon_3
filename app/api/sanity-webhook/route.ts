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
    
    console.log('Received webhook:', {
      type: body._type,
      operation: body.operation,
      documentId: body._id
    })

    if (!body._type || !body._id) {
      throw new Error('Missing required fields')
    }

    let result
    switch (body.operation) {
      case 'create':
      case 'update':
        const Model = body._type === 'product' ? Product : Delivery
        result = await Model.findOneAndUpdate(
          { _id: body._id },
          body,
          { upsert: true, new: true }
        )
        break
      
      case 'delete':
        const DeleteModel = body._type === 'product' ? Product : Delivery
        result = await DeleteModel.findByIdAndDelete(body._id)
        break

      default:
        throw new Error(`Unknown operation: ${body.operation}`)
    }

    console.log('Operation result:', result)
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      error: 'Webhook processing failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 