# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

**NOTE**: `backstage-cli` uses `yarn.lock` for some reason at the end of backend build run.
**NOTE**: Clone this repo near your `simulacrum` repo dir

Before start the app do some preparations in simulacrum dir:

```sh
npm install
npm run build
cd packages/auth0 && npm link
cd packages/ldap && npm link
cd packages/server && npm link
cd integrations/cypress && npm install && npm run build && npm link
```

To start the app:

```sh
npm install
npm run build
npm start
````

The last command starts simulation server and backstage backend
