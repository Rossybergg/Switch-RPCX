const RPC = require('discord-rpc');
export const client = new RPC.Client({
  transport: 'ipc'
});

export const discordLogin = () =>{
  client.login({
    clientId: '951962527087075338'
  }).then(() => {
    client.on('ready', () => {
      console.log('Switch RPCX logged in');
    })
  }).catch((error) => {
    console.log(error);
  })
}

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
  })
}