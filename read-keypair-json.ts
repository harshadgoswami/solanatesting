// NOT WORKING BUT HERE only for reference

const fs = require('fs');

// Load the keypair JSON file
const keypairFile = './temp/id.json';

// Read the JSON file
const keypairBytes = JSON.parse(fs.readFileSync(keypairFile));

// Convert the byte array to readable values
const secretKey = Uint8Array.from(keypairBytes);
console.log("Secret Key:", secretKey);

// Example: Convert secret key to hex string
const secretKeyHex = Buffer.from(secretKey).toString('hex');
console.log("Secret Key in Hex:", secretKeyHex);
