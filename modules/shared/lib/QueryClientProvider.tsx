'use client'

import React from 'react'
import { QueryClient, QueryClientProvider as Provider } from 'react-query'

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
  const client = new QueryClient()
  return <Provider client={client}>{children}</Provider>
}
