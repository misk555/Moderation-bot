const { Client } = require('discord.js');
const express = require('express');
const app = express();

app.listen(() => console.log('Hi.'));

app.use('/ping', (req, res) => {
    res.send(new Date());
});
const client = new Client();

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})

client.login(process.env.TOKEN);
