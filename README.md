# [Backstage](https://backstage.io)

Backstage application with [@simulacrum](https://github.com/thefrontside/simulacrum) simulating [auth0](https://github.com/thefrontside/simulacrum/tree/v0/packages/auth0) and [ldap](https://github.com/thefrontside/simulacrum/tree/v0/packages/ldap).

## Prerequisites

[mkcert]() is required for running a self-signed ssl certificate from localhost.

Setup instructions are [here](https://github.com/thefrontside/simulacrum/blob/5bd797f68a0c33a4d8c98dc7f2b7a1d2526fa699/packages/ui/README.md#running-https-services-from-localhost).

## Quick Start

To start the app:

```sh
yarn install
yarn start
````

The last command starts simulation server, backstage backend and backstage frontend.
