import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { polygon } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, cookieToInitialState } from 'wagmi';

// Initialize Query Client
const queryClient = new QueryClient();
const projectId = process.env.NEXT_PUBLIC_CRYPTO_PROJECT_ID || 'YOUR_PROJECT_ID';

// Define metadata
const metadata = {
  name: 'Sportmagic App',
  description: 'Sportmagic - A Web3 App for Sports and Blockchain',
  icons: ['https://yourdomain.com/icon.png'],
  url: 'https://yourdomain.com',
};

// Define networks
const networks = [polygon];

// Initialize Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// Check for wagmiConfig with detailed logging
console.log("Wagmi Adapter:", wagmiAdapter); // Logs full adapter object for inspection
const wagmiConfig = wagmiAdapter?.wagmiConfig;
console.log("Wagmi Config:", wagmiConfig); // Logs wagmiConfig to check if it's defined

// Set up initial state with a fallback if wagmiConfig is undefined
const initialState = wagmiConfig
  ? cookieToInitialState(wagmiConfig)
  : {}; // Fallback to an empty object if wagmiConfig is undefined

// Create AppKit instance with wagmiAdapter and logging to track any configuration issues
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  defaultNetwork: polygon,
  features: {
    swaps: true,
    onramp: true,
    analytics: true,
    legalCheckbox: true,
  },
  debug: true,
});

// Provide the config to WagmiProvider with a safe fallback
export function AppKitProvider({ children }) {
  if (!wagmiConfig) {
    console.error("Wagmi Config is not defined. Ensure Wagmi Adapter is properly set up.");
    // Return children unwrapped if wagmiConfig is missing
    return <>{children}</>; 
  }

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
