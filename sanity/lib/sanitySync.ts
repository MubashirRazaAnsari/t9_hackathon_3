import { createClient } from '@sanity/client'

const syncClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2021-03-25',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

export async function syncToMongoDB(documentId: string) {
  try {
    // Fetch the document from Sanity
    const doc = await syncClient.getDocument(documentId)
    
    if (!doc) {
      console.log('Document not found:', documentId)
      return
    }

    // Determine the API endpoint based on document type
    const endpoint = doc._type === 'product' ? 'products' : 'deliveries'
    
    // Send to your API
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.SANITY_API_TOKEN!
      },
      body: JSON.stringify(doc)
    })

    if (!response.ok) {
      throw new Error(`Failed to sync: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Sync error:', error)
    throw error
  }
} 