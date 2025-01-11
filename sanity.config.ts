'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Elite Restaurant',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: 'v2022-06-30'
    })
  ],
  schema,
  document: {
    // @ts-ignore - Sanity types are not fully compatible
    actions: (prev) => {
      return prev.map((originalAction) => {
        // Only modify the publish action
        if (originalAction.type === 'publish') {
          return {
            ...originalAction,
            async handle(params) {
              // Call original publish action
              await originalAction.handle(params)

              // Get the document from params
              const { draft, published } = params
              const doc = draft || published

              if (doc) {
                try {
                  // Sync to MongoDB
                  await fetch('/api/sanity-webhook', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(doc)
                  })
                } catch (error) {
                  console.error('MongoDB sync failed:', error)
                }
              }
            }
          }
        }
        return originalAction
      })
    }
  }
})
