const emotes = require ("../../config/emojis.json");

module.exports = {
    name: "ping",
    description: "returns bot latency",
    aliases: [],
    run: async (client, message, args) => {

        //Message
        message.channel.send(`Ping : ${client.ws.ping} ms ${emotes.success}`)

    }
}
