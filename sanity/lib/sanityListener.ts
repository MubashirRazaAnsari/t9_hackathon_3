import { createClient } from '@sanity/client'
import type { 
  ListenEvent, 
  MutationEvent, 
  SanityDocument 
} from '@sanity/client'

const listener = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2022-06-30',
  useCdn: false,
  useProjectHostname: true,
  withCredentials: true
})

export async function startSanityListener() {
  const subscription = listener
    .listen<SanityDocument>('*[_type in ["product", "delivery"]]')
    .subscribe(async (update: ListenEvent<SanityDocument>) => {
      try {
        if (update.type !== 'mutation') return
        
        const mutation = update as MutationEvent<SanityDocument>
        const { documentId } = mutation
        const result = mutation.result

        // Determine operation type
        const operation = mutation.transition === 'disappear' ? 'delete' : 
                         mutation.transition === 'appear' ? 'create' : 'update'

        if (!result && operation !== 'delete') return

        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity-webhook`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.SANITY_API_TOKEN!
          },
          body: JSON.stringify({
            _type: result?._type,
            _id: documentId,
            operation,
            ...(result || {})
          })
        })
      } catch (error) {
        console.error('Listener error:', error)
      }
    })

  return () => subscription.unsubscribe()
} 