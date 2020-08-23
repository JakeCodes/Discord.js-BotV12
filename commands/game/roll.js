const { MessageEmbed } = require("discord.js")
const { randomInt } = require("../../utils/randomInt")

module.exports = {
    name: "roll",
    description: "Rolls Dice!",
    aliases: ["diceroll", "rolldice"],
    run: (message, args) => {
        const random = randomInt(args)

        var embed = new MessageEmbed()
            .setTitle("Dice Roll")
            .setDescription(random)
            .setColor(15158332)

        message.channel.send(embed)
    }
}