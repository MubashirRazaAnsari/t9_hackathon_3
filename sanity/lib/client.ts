import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-01',
  useCdn: false, // Set to false for real-time updates
  token: process.env.SANITY_API_KEY, // Make sure this is set
  perspective: 'published'
})
