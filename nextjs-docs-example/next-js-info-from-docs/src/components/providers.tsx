"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import { WagmiConfiguredProvider } from "./wagmi/wagmi-config/wagmi-config";
enableReactUse();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfiguredProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiConfiguredProvider>
  );
}
