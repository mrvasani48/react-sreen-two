import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    }
  }
});

export function HttpQueryClientProvider(props) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {props?.children}
      </QueryClientProvider>
    </>
  )
}