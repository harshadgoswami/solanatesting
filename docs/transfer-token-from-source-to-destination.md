To transfer tokens (such as SPL tokens) from a source account to a destination account in Solana using TypeScript, you'll need to use the Solana Web3 SDK along with the `@solana/spl-token` library.

Here is an example of how to perform an SPL token transfer using **TypeScript**:

### Steps:

1. Install the necessary dependencies.
2. Create the token transfer transaction.
3. Sign and send the transaction.

### 1. **Install Dependencies**

You'll need to install the Solana Web3 and SPL Token libraries:

```bash
npm install @solana/web3.js @solana/spl-token
```

### 2. **Token Transfer Example in TypeScript**

```typescript
import {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import {
  getOrCreateAssociatedTokenAccount,
  transfer,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

// Define your Solana cluster (Devnet, Testnet, or Mainnet)
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {
  // Generate Keypairs for the source and destination accounts (you can replace these with actual keypairs)
  const sourceSecretKey = Uint8Array.from([
    /* Your 64-byte secret key array here */
  ]);
  const sourceWallet = Keypair.fromSecretKey(sourceSecretKey);

  const destinationPublicKey = new PublicKey(
    "/* Destination account public key */"
  );

  // SPL Token Mint Address (Replace with the actual token mint address)
  const tokenMintAddress = new PublicKey(
    "/* Token Mint Address (e.g., USDC, etc.) */"
  );

  // Create Associated Token Accounts (ATA) for the source and destination
  const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection, // connection object
    sourceWallet, // source wallet (payer)
    tokenMintAddress, // token mint address
    sourceWallet.publicKey // source wallet's public key
  );

  const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection, // connection object
    sourceWallet, // payer
    tokenMintAddress, // token mint address
    destinationPublicKey // destination's public key
  );

  // Create the token transfer transaction
  const amount = 1000000; // Amount to transfer (1.0 token in lamports, assuming 6 decimals)

  const transaction = new Transaction().add(
    transfer(
      sourceTokenAccount.address, // source token account
      destinationTokenAccount.address, // destination token account
      sourceWallet.publicKey, // owner of the source account
      amount, // amount to transfer (in smallest unit, like lamports for SPL tokens)
      [], // multi-signature account (empty if not used)
      TOKEN_PROGRAM_ID // SPL Token program ID
    )
  );

  // Send and confirm the transaction
  const signature = await sendAndConfirmTransaction(connection, transaction, [
    sourceWallet,
  ]);
  console.log("Transfer successful, transaction signature:", signature);
})();
```

### Explanation:

- **Connection**: Connects to Solana’s Devnet (or any other cluster you define).
- **Keypair**: Generates keypairs from the secret key for signing transactions.
- **Token Accounts**: The `getOrCreateAssociatedTokenAccount` function ensures that both the sender and receiver have token accounts for the SPL token being transferred.
- **Transaction**: Adds a `transfer` instruction to move tokens between accounts.
- **sendAndConfirmTransaction**: Sends the transaction to the Solana blockchain and waits for confirmation.

### 3. **Things to Note:**

- Replace the `sourceSecretKey` with the actual private key (as an array) of the source wallet.
- Replace the `destinationPublicKey` with the address of the destination account.
- Ensure the **tokenMintAddress** is correct for the SPL token you're transferring (e.g., USDC on Devnet).
- The **amount** is in the smallest unit of the token (like lamports), so if a token has 6 decimals, then 1.0 token = 1,000,000 lamports.

This will help you transfer tokens between accounts on Solana using TypeScript.
