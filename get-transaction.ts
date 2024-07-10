
import {
    Connection,
    PublicKey,
    ParsedTransactionWithMeta,
    ConfirmedSignatureInfo,
    clusterApiUrl,
} from '@solana/web3.js';

async function getTransactionsForAddress(address: string) {
    const connection = new Connection(clusterApiUrl('testnet'), 'confirmed');
    const publicKey = new PublicKey(address);

    // Fetch confirmed signatures for the address
    const signatures: ConfirmedSignatureInfo[] = await connection.getSignaturesForAddress(
        publicKey,
        { limit: 10 }, // Change the limit as needed
    );

    console.log(`Found ${signatures.length} transactions for address ${address}`);

    // Fetch transaction details for each signature
    const transactions: (ParsedTransactionWithMeta | null)[] = await Promise.all(
        signatures.map((signature) => connection.getParsedTransaction(signature.signature))
    );

    // Log the transaction details
    transactions.forEach((transaction, index) => {
        if (transaction) {
            console.log(`Transaction ${index + 1}:`, JSON.stringify(transaction));
        } else {
            console.log(`Transaction ${index + 1}: No details found`);
        }
    });
}

// Replace with the address you want to check
const address = 'B4x58JZf7Yjnb3RkjrXvYNdwhBR4i5fRUUhWPDGchsM6';

getTransactionsForAddress(address).catch((err) => {
    console.error(err);
});

