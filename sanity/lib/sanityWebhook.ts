import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  stega: {
    enabled: true,
    studioUrl: '/studio',
  }
})

export async function syncToMongoDB(type: 'product' | 'delivery', id: string) {
  try {
    const query = `*[_type == "${type}" && _id == "${id}"][0]`
    const data = await client.fetch(query)
    
    if (!data) return

    const apiEndpoint = type === 'product' ? '/api/products' : '/api/deliveries'
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${apiEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.SANITY_API_TOKEN!
      },
      body: JSON.stringify(data)
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