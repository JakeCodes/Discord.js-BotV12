const { MessageEmbed } = require("discord.js")
const emotes = require ("../../utils/emojis.json");

module.exports = {
    name: "random",
    description: "returns random string",
    aliases: ["diceroll", "rolldice"],
    run: (message, args) => {
        if (!args[0] || !args[1]) return message.reply(`You must have at least 2 args ${emotes.error}`)

        const random = Math.floor(Math.random() * args.length)
        const randomStr = args[random]
        console.log(randomStr)

        var embed = new MessageEmbed()
            .setTitle("Random")
            .setDescription(`${randomStr}`)
            .setColor(15158332)

        message.channel.send(embed)
    }
}