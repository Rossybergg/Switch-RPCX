import appModulePath from 'app-module-path';
import http from 'http';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { discordLogin, updateStatus, client } from '../src/services/discord/DiscordService';

appModulePath.addPath(`${__dirname}`);

const Api = express();
const HTTP = http.Server(Api);

Api.use(cors());
Api.use(express.json());
Api.use('/api', routes);

HTTP.listen(9001, () => {
  console.log('listening on *:9001');
});

discordLogin();
