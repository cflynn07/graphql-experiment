# GraphQL Experiment

## Example Queries
```js
# Query
{
  accounts (id: 2) {
    owner
    emails {
      from
    }
  }
}

# Response
{
  "data": {
    "accounts": {
      "owner": "George Jetson 2",
      "emails": [{
        "from": "from 1"
      }]
    }
  }
}
```
