import {
    Connection,
    Transaction,
    clusterApiUrl,
    sendAndConfirmTransaction,
    Keypair,
    PublicKey,
} from "@solana/web3.js";
import {
    createMint,
    TOKEN_2022_PROGRAM_ID,
    getOrCreateAssociatedTokenAccount,
    mintTo,
    createTransferInstruction,
} from "@solana/spl-token";
import bs58 from 'bs58';
import { PRIVATE_KEY } from "./config/dev";


const connection = new Connection(clusterApiUrl("devnet"), "confirmed");


const mint = new PublicKey(`VSx3zKSLSgPyUgHxghfwmwsyCHw9HzfGyKNkxgzqqcE`);
/** 
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
**/


const depositAccount = Keypair.fromSecretKey(bs58.decode(PRIVATE_KEY));



// Create token account for sender
const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    depositAccount, // payer
    mint, // mint address
    depositAccount.publicKey, // token account owner
    false,
    "confirmed",
    undefined,
    TOKEN_2022_PROGRAM_ID
);

// Create token account for recipient
const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet.keypair, // payer
    mint,
    new Keypair().publicKey, // token account owner
    false,
    "confirmed",
    null,
    TOKEN_2022_PROGRAM_ID
);

/** 

// Mint tokens to sourceTokenAccount
await mintTo(
    connection,
    wallet.keypair, // payer
    mint, // mint address
    sourceTokenAccount.address, // destination
    wallet.publicKey, // mint authority
    100, // amount
    [],
    {
        commitment: "confirmed",
    },
    TOKEN_2022_PROGRAM_ID
);
**/

// Create instruction to transfer tokens
const instruction = createTransferInstruction(
    sourceTokenAccount.address, // transfer from
    destinationTokenAccount.address, // transfer to
    wallet.publicKey, // source token account owner
    100, // amount
    [],
    TOKEN_2022_PROGRAM_ID
);

// Create transaction
const transaction = new Transaction().add(instruction);

// Sign and send transaction
const transactionSignature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [
        wallet.keypair, // payer, owner
    ]
);

console.log(
    "\nTransaction Signature:",
    `https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
);
