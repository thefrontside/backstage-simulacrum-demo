# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

**NOTE**: `backstage-cli` uses `yarn.lock` for some reason at the end of backend build run.
**NOTE**: Clone this repo near your `simulacrum` repo dir

Before start the app do some preparations in simulacrum dir:

```sh
yarn install
yarn run build
cd packages/auth0 && yarn link
cd packages/ldap && yarn link
cd packages/server && yarn link
cd integrations/cypress && yarn install && yarn run build && yarn link
```

To start the app:

```sh
yarn install
yarn run build
yarn start
````

The last command starts simulation server and backstage backend
