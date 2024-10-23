### How to get Transaction though CURL ?

```bash
curl https://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getTransaction",
    "params": [
      "63xtbuaHvpdxdT9acq2hmewgrPbvm3JLhoxYhUYmMuwdSjgcurJXV8GAqCLZagqWG7qbHBzeaMFo6TvhtbMrexuo",
      "json"
    ]
  }
'
```

### Solana Core concepts

It is important to understand the core concept of solana.please refer following 2 sections

- [Solana Account Model](https://solana.com/docs/core/accounts)
- [Transaction and Instruction](https://solana.com/docs/core/transactions)

### Important References

- [reference](https://solana.com/docs/rpc/http/gettransaction) for getting transaction information
- [reference](https://solana.com/developers/guides/getstarted/solana-token-airdrop-and-faucets#using-the-solana-cli) for getting the faucet
- [reference](https://solana.com/docs/rpc/http/getsignaturesforaddress#parameters) for getting signatures for addresses
