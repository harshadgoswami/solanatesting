import { BIP32Factory } from 'bip32';
import * as bip39 from 'bip39';
import bs58 from 'bs58';
import * as ecc from 'tiny-secp256k1';
import { Keypair } from "@solana/web3.js";
import { SOLANA_MNEMONICS } from './config/dev';

const generateSolanaAddress = async (addressNumber: number) => {
    const seed = await bip39.mnemonicToSeed(SOLANA_MNEMONICS as string);
    const bip32 = BIP32Factory(ecc);
    const root = bip32.fromSeed(seed);
    const child = root.derivePath(`m/44'/501'/0'/${addressNumber}'`);
    const keypair = Keypair.fromSeed(child.privateKey!.subarray(0, 32));

    console.log(`address ${keypair.publicKey.toBase58()} and privatekey ${bs58.encode(keypair.secretKey)}`);

    return { address: keypair.publicKey.toBase58(), privateKey: bs58.encode(keypair.secretKey) }
}

generateSolanaAddress(0).catch((err) => {

});


