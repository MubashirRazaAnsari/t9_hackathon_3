import { NextResponse } from 'next/server'
import { syncToMongoDB } from '@/sanity/lib/sanityWebhook'
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const isAuthenticated = await auth(request)
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    await syncToMongoDB(body.type, body._id)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
} 