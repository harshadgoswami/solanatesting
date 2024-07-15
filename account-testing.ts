import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import bs58 from 'bs58';
async function main() {
    // Create a new Keypair (new account)
    const keypair = Keypair.generate();
    console.log(`Generated Account Public Key: ${keypair.publicKey.toBase58()}`);

    // Extract the secret key
    const secretKey = keypair.secretKey;
    console.log(`Secret Key: ${Array.from(secretKey)}`);

    ///dsecretKey.toString();
    const secretKeyString = bs58.encode(secretKey);
    console.log(`Secret Key : ${secretKeyString}`);

    const secretKeyAgain = bs58.decode(secretKeyString);


    // Recreate the Keypair from the secret key
    const recreatedKeypair = Keypair.fromSecretKey(secretKeyAgain);
    console.log(`Recreated Account Public Key: ${recreatedKeypair.publicKey.toBase58()}`);

    // Ensure the public keys match
    if (keypair.publicKey.equals(recreatedKeypair.publicKey)) {
        console.log('The recreated account matches the original account.');
    } else {
        console.error('The recreated account does NOT match the original account.');
        return;
    }

    // Connect to the Solana devnet
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Request an airdrop to fund the account (optional)
    // const airdropSignature = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
    // await connection.confirmTransaction(airdropSignature);
    // console.log('Airdropped 2 SOL to the new account.');

    // Get the balance of the account
    // const balance = await connection.getBalance(keypair.publicKey);
    // console.log(`Account Balance: ${balance / LAMPORTS_PER_SOL} SOL`);
}

main().catch((err) => {
    console.error(err);
});
