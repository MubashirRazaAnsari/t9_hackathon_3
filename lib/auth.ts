import { headers } from 'next/headers'

export async function auth(request: Request): Promise<boolean> {
  const headersList = headers()
  const apiKey = headersList.get('x-api-key')
  
  // Compare with your environment variable
  return apiKey === process.env.SANITY_API_KEY
} 