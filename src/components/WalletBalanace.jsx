import React, { useState } from 'react';
import { getWalletBalance } from '../ic';

function WalletBalance() {
  const [owner, setOwner] = useState('');
  const [balance, setBalance] = useState(null);

  const handleGetBalance = async () => {
    const result = await getWalletBalance(owner);
    setBalance(result);
  };

  return (
    <div>
      <h2>Wallet Balance</h2>
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <button onClick={handleGetBalance}>Get Balance</button>
      {balance !== null && <p>Balance: {balance}</p>}
    </div>
  );
}

export default WalletBalance;
