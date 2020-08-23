require('dotenv').config();
const { Collection, Client } = require("discord.js")
const { registerCommands, registerEvents } = require('./utils/registry');
const { Player } = require("discord-player")

// From Discord
const client = new Client()
client.commands = new Collection();
client.events = new Collection();

// Player
const player = new Player(client)
client.player = player;

// Other
const token = process.env.TOKEN
const fs = require('fs')

// Register Events & Commands
registerEvents(client, '../events');
registerCommands(client, '../commands');

// Login
client.login(token)