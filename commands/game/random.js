const { MessageEmbed } = require("discord.js")
const emotes = require ("../../config/emojis.json");
const { randomInt } = require("../../utils/randomInt")

module.exports = {
    name: "random",
    description: "returns random string",
    aliases: ["rand"],
    run: (message, args) => {
        if (!args[0] || !args[1]) return message.reply(`You must have at least 2 args ${emotes.error}`)

        const random = randomInt(args.length)
        const randomStr = args[random]

        var embed = new MessageEmbed()
            .setTitle("Random")
            .setDescription(`${randomStr}`)
            .setColor(15158332)

        message.channel.send(embed)
    }
}