'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { PropsWithChildren, useState } from 'react'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					staleTime: 1000 * 20,
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	)
}
