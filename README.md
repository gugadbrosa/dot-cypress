# dot-cypress

This is an evaluation from a technical challenge

## Structure

Code is sctructured as shown below:

```
├── cypress
│   ├── e2e
│   │   ├── cart
│   │   │   └── cart.spec.js
│   │   ├── checkout
│   │   │   └── checkout.spec.js
│   │   └── login
│   │   └── login.spec.js
│   ├── fixtures
│   │   ├── example.json
│   │   └── loginData.js
│   ├── screenshots
│   └── support
│   ├── commands.js
│   └── e2e.js
```
## Running locally

- Clone the repo
- Run `npm install`
- Run `npm test`

## CI

The project uses [GitHub Actions](https://docs.github.com/en/actions) and tests are run automatically on PRs and on merge to `main` branch.
