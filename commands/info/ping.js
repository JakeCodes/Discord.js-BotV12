const emotes = require ("../../utils/emojis.json");
const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "returns bot latency",
    aliases: [],
    run: async (client, message, args) => {

        //Message
        message.channel.send(`Ping : ${client.ws.ping} ms ${emotes.success}`)

    }
}
