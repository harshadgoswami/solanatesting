import {
    Connection,
    Transaction,
    clusterApiUrl,
    sendAndConfirmTransaction,
    Keypair,
} from "@solana/web3.js";
import {
    createMint,
    createAccount,
    TOKEN_2022_PROGRAM_ID,
    createMintToInstruction,
} from "@solana/spl-token";

const wallet = pg.wallet;
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Create new Mint Account
const mint = await createMint(
    connection,
    wallet.keypair, // payer
    wallet.publicKey, // mint authority
    wallet.publicKey, // freeze authority
    2, // decimals
    new Keypair(), // keypair for mint account
    null,
    TOKEN_2022_PROGRAM_ID
);

// Create new Token Account, defaults to ATA
const tokenAccount = await createAccount(
    connection,
    wallet.keypair, // payer
    mint, // mint address
    wallet.publicKey, // token account owner
    null,
    null,
    TOKEN_2022_PROGRAM_ID
);

const instruction = createMintToInstruction(
    mint, // mint address
    tokenAccount, // destination
    wallet.publicKey, // mint authority
    100, // amount
    [],
    TOKEN_2022_PROGRAM_ID
);

const transaction = new Transaction().add(instruction);

// Sign and send transaction
const transactionSignature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [
        wallet.keypair, // payer, mint authority
    ]
);

console.log(
    "\nTransaction Signature:",
    `https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
);

console.log(
    "\nToken Account: ",
    `https://explorer.solana.com/address/${tokenAccount}?cluster=devnet`
);
