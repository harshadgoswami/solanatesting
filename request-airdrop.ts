import {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
} from '@solana/web3.js';

async function requestAirdrop() {
    // Connect to the Solana devnet
    const connection = new Connection(clusterApiUrl('testnet'), 'confirmed');

    // Generate a new keypair for the recipient
    const recipient = Keypair.generate();

    // Request an airdrop of 1 SOL to the recipient's account
    const airdropSignature = await connection.requestAirdrop(
        recipient.publicKey,
        1 * LAMPORTS_PER_SOL,
    );

    // Confirm the transaction
    await connection.confirmTransaction(airdropSignature);

    console.log(`Airdropped 1 SOL to ${recipient.publicKey.toBase58()}`);
    console.log(`Transaction Signature: ${airdropSignature}`);
    console.log(`Recipient Secret Key: [${recipient.secretKey.toString()}]`);
}

requestAirdrop().catch((err) => {
    console.error(err);
});
