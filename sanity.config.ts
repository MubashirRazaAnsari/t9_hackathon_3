'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Elite Restaurant',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [structureTool()],
  schema,
  cors: {
    allowCredentials: true,
    allowHeaders: ['Authorization', 'Content-Type'],
    allowOrigins: ['http://localhost:3000', 'https://elite-restuarant.vercel.app']
  },
  apiVersion: '2022-06-30',
})
