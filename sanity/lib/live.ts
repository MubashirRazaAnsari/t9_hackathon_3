'use client'

import { useLiveQuery } from 'next-sanity/preview'
import { client } from './client'

export function usePreview(query: string, params?: Record<string, unknown>) {
  return useLiveQuery(query, params, {
    client,
    token: process.env.SANITY_API_KEY,
  })
}
