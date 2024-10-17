import React, { useState } from 'react';
import { transferNFT } from '../ic';

function TransferNFT() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleTransfer = async () => {
    const result = await transferNFT(from, to, tokenId);
    alert(result ? 'Transfer successful!' : 'Transfer failed!');
  };

  return (
    <div>
      <h2>Transfer NFT</h2>
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}

export default TransferNFT;
