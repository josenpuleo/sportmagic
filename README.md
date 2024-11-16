Sportmagic
Sportmagic is a cryptocurrency-based project that focuses on revolutionizing the gaming and blockchain ecosystem. With seamless integration on the Polygon blockchain, Sportmagic combines innovative features like live token balances, swaps, and ICO participation, delivering a powerful and user-friendly experience.

Table of Contents
Overview
Features
Technology Stack
Installation and Setup
Usage
Contributing
Security
License
Contact
Overview
The Sportmagic project is designed to integrate cryptocurrency into gaming platforms with features that enhance the user experience. By leveraging the Polygon blockchain and modern web technologies, Sportmagic aims to be at the forefront of crypto adoption in gaming and beyond.

Key aspects include:

Displaying token balances across wallets.
Real-time price updates for supported cryptocurrencies.
A fully functional token swap feature.
An upcoming ICO participation mechanism.
Features
Current Features
Multi-Wallet Support: Easily connect wallets using Reown WalletConnect integration.
Live Token Balances: View the balances of FRT, POL, ETH, and SMC tokens in real-time.
Swapping Tokens: Functional token swap interface for FRT, POL, ETH, and future SMC token support.
ICO Participation: Future release will include a platform to participate in the Sportmagic ICO.
Upcoming Features
Advanced analytics and tracking for user wallets.
Gaming platform integration.
Secure token staking and rewards.
Technology Stack
Blockchain
Polygon Chain: Fast and cost-efficient blockchain for handling transactions.
Frontend
React.js: For building the user interface.
Tailwind CSS: For modern and responsive styling.
Backend
Node.js: Server-side scripting.
Express.js: Backend framework for handling API requests.
Dependencies
Wagmi & Viem: For blockchain interactions and wallet integration.
Reown AppKit: For wallet connection and token management.
Installation and Setup
Follow these steps to set up the project locally.

Prerequisites
Node.js installed on your machine.
A GitHub account.
A compatible wallet (e.g., MetaMask).
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/josenpuleo/sportmagic.git
cd sportmagic
Checkout the branch for the app:

bash
Copy code
git checkout site-app
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env.local file in the root directory with the following keys:

makefile
Copy code
NEXT_PUBLIC_CRYPTO_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_RPC_URL=https://rpc.polygon.io
Run the development server:

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser to view the app.

Usage
Connect Wallet:

Use the “Connect Wallet” button to link your cryptocurrency wallet.
Wallets supported: MetaMask, Coinbase Wallet, WalletConnect.
Token Balances:

View balances for supported tokens: FRT, POL, ETH, and SMC.
Swap Tokens:

Use the swap interface to exchange between supported tokens.
Participate in ICO (coming soon):

A dedicated section for token purchases during the ICO launch.
Contributing
We welcome contributions to Sportmagic! To get started:

Fork the repository and clone your fork locally.
Create a new branch for your feature or bug fix:
bash
Copy code
git checkout -b feature-name
Commit your changes and push your branch:
bash
Copy code
git commit -m "Add new feature"
git push origin feature-name
Open a pull request to the site-app branch with a detailed description of your changes.
Please see our Contributing Guidelines for more details.

Security
If you find a security vulnerability, please report it via email at security@sportmagic.app. We aim to address all security concerns within 48 hours.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project with proper attribution.

Contact
For questions, feedback, or support, please contact us:

Email: info@sportmagic.org
GitHub Issues: Submit an Issue (https://github.com/josenpuleo/sportmagic/issues)
