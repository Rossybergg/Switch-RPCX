import appModulePath from 'app-module-path';
import http from 'http';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const RPC = require('discord-rpc');

appModulePath.addPath(`${__dirname}`);

const Api = express();
const HTTP = http.Server(Api);
const client = new RPC.Client({
  transport: 'ipc',
});

Api.use(cors());
Api.use(express.json());
Api.use('/api', routes);

HTTP.listen(9001, () => {
  console.log('listening on *:9001');
});

export const discordLogin = () => {
  client
    .login({
      clientId: '951962527087075338',
    })
    .then(() => {
      client.on('ready', () => {
        console.log('Switch RPCX logged in');
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateStatus = (game, image) => {
  client.setActivity({
    state: 'Playing on Switch',
    details: game,
    startTimestamp: Date.now(),
    largeImageKey: image,
    largeImageText: game,
    smallImageKey: 'switch',
    smallImageText: 'Online on Nintendo Switch',
    instance: true,
  });
};

discordLogin();
