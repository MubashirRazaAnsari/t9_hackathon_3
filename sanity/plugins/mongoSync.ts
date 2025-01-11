import { definePlugin } from 'sanity'

export const mongoSync = definePlugin({
  name: 'mongo-sync',
  document: {
    productionUrl: async (prev, context) => {
      const { document } = context

      if (document._type === 'product' || document._type === 'delivery') {
        try {
          await fetch('/api/sanity-webhook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(document)
          })
        } catch (error) {
          console.error('Sync error:', error)
        }
      }

      return prev
    }
  }
}) 