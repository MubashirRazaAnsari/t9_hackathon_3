import ErrorBoundary from '../components/ErrorBoundary'
import { Suspense } from 'react'
import Loading from '../loading'

export default function DeliveriesPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        {/* Your deliveries content */}
      </Suspense>
    </ErrorBoundary>
  )
} 