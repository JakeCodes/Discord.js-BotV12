require('dotenv').config();
const { Collection, Client } = require("discord.js")

// From Discord
const client = new Client()
client.commands = new Collection();
client.events = new Collection();

// Other
const token = process.env.TOKEN
const fs = require('fs')

const adminCMDFiles = fs.readdirSync("./commands/mod").filter(file => file.endsWith('.js'));

adminCMDFiles.forEach(file => {
    const adminCommand = require(`./commands/mod/${file}`);

    client.commands.set(adminCommand.name, adminCommand)
})

const normalCMDFiles = fs.readdirSync("./commands/normal").filter(file => file.endsWith('.js'));

normalCMDFiles.forEach(file => {
    const normalCommand = require(`./commands/normal/${file}`);

    client.commands.set(normalCommand.name, normalCommand)
})

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

eventFiles.forEach(file => {
    const events = require(`./events/${file}`);
    const event = file.split('.')[0];
	client.on(event, events.bind(null, client));
})


// Login
client.login(token)