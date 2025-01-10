'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('Error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-[#FF9F0D] text-white rounded-md"
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
} 