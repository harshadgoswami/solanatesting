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
