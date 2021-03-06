import { main } from 'effection';
import { createAcmecorpSimulationServer, Server } from '../src/server';
import { createClient } from '@simulacrum/client';

main(function*() {
  let server: Server = yield createAcmecorpSimulationServer();

  let url = `http://localhost:${server.address.port}`;

  console.log(`🚀 simulacrum running at ${url}`);

  let client = createClient(url);

  let simulation = yield client.createSimulation("acmecorp", {
    services: {
      auth0: {
        port: 4400
      },
      ldap: {
        port: 999,
      }
    }
  });

  console.dir({ simulation }, { depth: 3 });

  yield;
});
