import React from 'react';
import MintNFT from './components/MintNFT';
import TransferNFT from './components/TransferNFT';
import WalletBalance from './components/WalletBalance';

function App() {
  return (
    <div>
      <h1>NFT Wallet</h1>
      <WalletBalance />
      <MintNFT />
      <TransferNFT />
    </div>
  );
}

export default App;
