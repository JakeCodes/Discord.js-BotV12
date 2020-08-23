require('dotenv').config();
const { Collection, Client } = require("discord.js")
const { registerCommands, registerEvents } = require('./utils/registry');

// From Discord
const client = new Client()
client.commands = new Collection();
client.events = new Collection();

// Player
const { Player } = require("discord-player")
const player = new Player(client)
client.player = player;

// Other
const token = process.env.TOKEN
const fs = require('fs')

registerEvents(client, '../events');
registerCommands(client, '../commands');

// Login
client.login(token)