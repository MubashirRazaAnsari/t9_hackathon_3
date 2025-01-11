'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://elite-restuarant.vercel.app'

export default defineConfig({
  name: 'default',
  title: 'Elite Restaurant',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: '2022-06-30'
    })
  ],
  schema,
  document: {
    // @ts-ignore
    actions: (prev) => {
      return prev.map((originalAction: any) => {
        if (originalAction.type === 'publish') {
          return {
            ...originalAction,
            async handle(props: any) {
              await originalAction.handle(props)
              const doc = props.draft || props.published
              
              if (doc) {
                try {
                  const response = await fetch(`${baseUrl}/api/sanity-webhook`, {
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

                  console.log('Document synced to MongoDB:', doc._id)
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
