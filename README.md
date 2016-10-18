# GraphQL Experiment

## Example Queries

### Simple Query
```js
# Query
{
  accounts (id: 1) {
    name
    emails {
      from
      subjet
      body
    }
  }
}

# Response
{
  "data": {
    "accounts": {
      "name": "Umbrella Corp",
      "emails": [
        {
          "from": "spam@gmail.com",
          "subject": null,
          "body": "hello you owe us money"
        },
        {
          "from": "poopoo@gmail.com",
          "subject": null,
          "body": "we have your money now release the girl"
        },
        {
          "from": "chrishansen@gmail.com",
          "subject": null,
          "body": "Buy this auto insurance"
        }
      ]
    }
  }
}
```

### Aliases
Using aliases we can request two different account objects and have the "aliased" to separate
properties on the response object.
```js
# Query
{
  firstAccount: account(id: 1) {
    name
    emails {
      from
      subject
      body
    }
  }
  secondAccount: account(id: 2) {
    name
    emails {
      from
      subject
      body
    }
  }
}

# Response
{
  "data": {
    "firstAccount": {
      "name": "Umbrella Corp",
      "emails": [
        {
          "from": "spam@gmail.com",
          "subject": null,
          "body": "hello you owe us money"
        },
        {
          "from": "poopoo@gmail.com",
          "subject": null,
          "body": "we have your money now release the girl"
        },
        {
          "from": "chrishansen@gmail.com",
          "subject": null,
          "body": "Buy this auto insurance"
        }
      ]
    },
    "secondAccount": {
      "name": "Apple",
      "emails": [
        {
          "from": "chrishansen@gmail.com",
          "subject": null,
          "body": "Why don't you have a seat."
        }
      ]
    }
  }
}
```

### Fragments
In the aliases example, the query is not very DRY. The requested fields are repeated for both accounts.
We can improve this with fragments
```js
# Query
{
  firstAccount: account(id: 1) {
    ...basicFields
  }
  secondAccount: account(id: 2) {
    ...basicFields
  }
}

fragment basicFields on Account {
  name
  emails {
    from
    subject
    body
  }
}

# Response same as in Alias example
```

### GraphiQL Web Explorer
Since the schema for our graphql service is defined, we get documentation and tools for free. One tool is `GraphiQL` - 
a web based service inspection tool that loads when the graphql endpoint is loaded in a web browser.
[./graphiql_example.png](./graphiql_example.png)