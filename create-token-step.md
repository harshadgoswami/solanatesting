[Reference Site](https://solana.com/docs/core/tokens)

### cli setup steps for testnet

```bash
solana config set --url https://api.testnet.solana.com
solana-keygen new -o C:\Users\harsh\.config\solana\id.json
solana airdrop 1
```

### solana credentails in command line

========================================================================
pubkey: 6p3f1oDZXJF8TN3357Y2vxFwB53KSXgQnEPnCyt1XPy8
========================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
engine method injury tiny wage frame visit mother pink crash mail market

### token creation

input: spl-token create-token

output:

Creating token CcLGVWUvrdhfQn8xZ9nmgWSAp8AKTbDP7n3T6SDURQFK under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

Address: CcLGVWUvrdhfQn8xZ9nmgWSAp8AKTbDP7n3T6SDURQFK
Decimals: 9

Signature: 65Jsod8CF8U18GEt7GtYxQED5vfe91hwTysWTvjyUJNhFhAgyKfBDCpH6RfFiNBTVcngweZfNhEN3sNyzrvJiABf

### create token account

input:
spl-token create-account CcLGVWUvrdhfQn8xZ9nmgWSAp8AKTbDP7n3T6SDURQFK

output:
Creating account J4kqgWxXuQipczi9wM1JNKhxiU19omrNt8Svi1gdMQpX

Signature: 3QkMvEMHCBaM2J9dyPmKxnkeQdHkyiBRDQMFDN1zBLErdpSUkwHzuj1bW7y6Ew2DMjQJvtMQoS47LKqnjRLNazy1

### mint solana token

input:
spl-token mint CcLGVWUvrdhfQn8xZ9nmgWSAp8AKTbDP7n3T6SDURQFK 100

output:
Minting 100 tokens
Token: CcLGVWUvrdhfQn8xZ9nmgWSAp8AKTbDP7n3T6SDURQFK
Recipient: J4kqgWxXuQipczi9wM1JNKhxiU19omrNt8Svi1gdMQpX

Signature: 53jwxv57vKHibLfg7oFfeYcE9dnUbQhJKLAYgyCnguP9aibYUKaS3cp3gBfedqnLwyCw2CeSyYgUNyoyXTcdRDJT

### transfer token to another address

input:
spl-token transfer CcLGVWUvrdhfQn8xZ9nmgWSAp8AKTbDP7n3T6SDURQFK 50 GBDFMRpCkaMfKxBSN4TnCL4ecAoPs6s6LMkGDLUtAt3C --fund-recipient

output:
Transfer 50 tokens
Sender: J4kqgWxXuQipczi9wM1JNKhxiU19omrNt8Svi1gdMQpX
Recipient: GBDFMRpCkaMfKxBSN4TnCL4ecAoPs6s6LMkGDLUtAt3C
Recipient associated token account: 7nM9iDSdaD38PmbkBDFaAeQUKuJiCHFjbaYdWLHR99bG
Funding recipient: 7nM9iDSdaD38PmbkBDFaAeQUKuJiCHFjbaYdWLHR99bG

Signature: 5egRF8tzzyZKKrVz8L4SxqZ1o8zF3h3CTV7cwwcfXn9StpQSJbQRuRvm21N2MqrBxU7n1ECJyor4gqkwXy6ePVrV
