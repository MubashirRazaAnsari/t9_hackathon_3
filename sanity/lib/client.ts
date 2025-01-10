import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published',
  stega: {
    enabled: false
  }
})

// Initialize client
try {
  client.config()
  console.log('Sanity client configured successfully')
} catch (error) {
  console.error('Sanity client configuration error:', error)
}

export { client }
