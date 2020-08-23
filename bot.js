require('dotenv').config();
const { Collection, Client } = require("discord.js")
const { registerCommands, registerEvents } = require('./utils/registry');
const { Player } = require("discord-player")

const client = new Client()
client.commands = new Collection();
client.events = new Collection();
client.player = new Player(client);

registerEvents(client, '../events');
registerCommands(client, '../commands');

client.login(process.env.TOKEN)