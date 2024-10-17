import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from './declarations/nft_wallet/nft_wallet.did.js';

// Setup agent and actor
const agent = new HttpAgent();
const nftActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: process.env.CANISTER_ID_NFT,
});

export async function mintNFT(owner, metadata) {
  try {
    const tokenId = await nftActor.mint_nft(owner, metadata);
    return tokenId;
  } catch (error) {
    console.error('Error minting NFT:', error);
    return null;
  }
}

export async function transferNFT(from, to, tokenId) {
  try {
    const result = await nftActor.transfer_nft(from, to, tokenId);
    return result === null; // Check if transfer succeeded
  } catch (error) {
    console.error('Error transferring NFT:', error);
    return false;
  }
}

export async function getWalletBalance(owner) {
  try {
    const balance = await nftActor.wallet_balance(owner);
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return null;
  }
}
