import appModulePath from 'app-module-path';
import http from 'http';
import express from 'express';
import cors from 'cors';
import { discordLogin, updateStatus, client } from '../src/services/discord/DiscordService';

appModulePath.addPath(`${__dirname}`);

const Api = express();
const HTTP = http.Server(Api);

Api.use(cors());
Api.use(express.json());

Api.get('/test', (req, res) => res.status(200).send('success!'));

Api.post('/updateStatus' , (req, res) => {
    const {game, image} = req.body;
    try {
        updateStatus(game, image);
        res.status(200).send('Status updated');
    } catch (error) {
        res.status(500).send(error);
    }
})

HTTP.listen(9001, () => {
    console.log('listening on *:9001');
});

discordLogin();

