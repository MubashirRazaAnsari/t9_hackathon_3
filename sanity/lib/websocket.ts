import { createClient } from '@sanity/client'

export const websocketClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-03-25',
  useCdn: false,
  useProjectHostname: true,
  withCredentials: true,
  ignoreBrowserTokenWarning: true,
  stega: {
    enabled: false
  }
}) 