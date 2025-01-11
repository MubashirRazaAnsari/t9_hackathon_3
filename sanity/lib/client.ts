import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2022-06-30',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  stega: {
    enabled: false
  }
})
