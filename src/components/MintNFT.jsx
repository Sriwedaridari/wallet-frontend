import React, { useState } from 'react';
import { mintNFT } from '../ic';

function MintNFT() {
  const [owner, setOwner] = useState('');
  const [metadata, setMetadata] = useState('');
  const [tokenId, setTokenId] = useState(null);

  const handleMint = async () => {
    const result = await mintNFT(owner, metadata);
    setTokenId(result);
  };

  return (
    <div>
      <h2>Mint NFT</h2>
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="Metadata"
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
      />
      <button onClick={handleMint}>Mint</button>
      {tokenId && <p>NFT Minted! Token ID: {tokenId}</p>}
    </div>
  );
}

export default MintNFT;
