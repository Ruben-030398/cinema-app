import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import queryClient from '../client-api'

function ReactQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}> 
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider