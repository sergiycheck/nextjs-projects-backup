"use client";

import { mainnet, sepolia } from "wagmi/chains";
import { http, createConfig, WagmiProvider } from "wagmi";
import { injected, coinbaseWallet, metaMask } from "wagmi/connectors";

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    // coinbaseWallet() // requires projectID
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2${alchemyKey}`, { batch: true }),
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2${alchemyKey}`, { batch: true }),
  },
});

export function WagmiConfiguredProvider({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}
