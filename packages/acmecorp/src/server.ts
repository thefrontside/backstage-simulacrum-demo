import { createSimulationServer, Server } from '@simulacrum/server';
import { auth0 as auth0Simulator } from '@simulacrum/auth0-simulator';
import { createLdapService } from '@simulacrum/ldap-simulator';
import { Resource } from 'effection';
export { Server } from '@simulacrum/server';
import { createData } from './data';
import { Vertex } from '@frontside/graphgen';
import {ldap as ldapSimulator} from '@simulacrum/ldap-simulator';

export function toRecord<
  T extends Vertex,
  K extends keyof Vertex
>(array: T[], selector: K): Record<T[K], Vertex['data']> {
  return array.reduce((acc, item) => (acc[item[selector]] = item.data, acc), {} as Record<T[K], Vertex>);
}

export function createAcmecorpSimulationServer(): Resource<Server> {
  return createSimulationServer({
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
    simulators: {
      acmecorp: ((state, options) => {
        let people = createData();

        people.unshift({
          id: 7777777777,
          type: 'User',
          data: {
              firstName: 'admin',
              lastName: 'admin',
              email: 'admin@org.com',
              password: 'password',
              displayName: 'Louvenia Ledner',
              title: 'Principal Brand Facilitator',
              co: 'Fiji',
              c: 'AD',
              st: 'MN',
              l: 'Lake Jodyshire',
              avatar: 'blank.png'
          }
        });

        state.update(state => ({
          ...state,
          store: {
            people: {
              ...toRecord(people, 'id')
            },
          }
        }));

        let auth0 = auth0Simulator(state, {
          ...options,
          audience: "https://thefrontside.auth0.com/api/v1/",
          clientId: "YOUR_AUTH0_CLIENT_ID",
          scope: "openid profile email offline_access",
        });

        let ldap = ldapSimulator(state, {
          ...options,
          port: 389,
          baseDN: "ou=users,dc=org.com",
          bindDn: "admin@org.com",
          bindPassword: "password",
          groupDN:"ou=groups,dc=org.com"
        });

        return {
          services: {
            ...auth0.services,
            ...ldap.services
          },
          scenarios: {}
        };
      })
    }
  });
}
