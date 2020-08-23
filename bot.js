require('dotenv').config();
const { Collection, Client } = require("discord.js")
const { registerCommands, registerEvents } = require('./utils/registry');
const { Player } = require("discord-player")

const client = new Client()
client.commands = new Collection();
client.events = new Collection();

const player = new Player(client)
client.player = player;

registerEvents(client, '../events');
registerCommands(client, '../commands');

client.login(process.env.TOKEN)