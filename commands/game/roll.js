const { MessageEmbed } = require("discord.js")
const { randomInt } = require("../../utils/randomInt")

module.exports = {
    name: "roll",
    description: "Rolls Dice!",
    aliases: ["diceroll", "rolldice"],
    run: (message, args) => {
        const random = randomInt(6)

        var embed = new MessageEmbed()
            .setTitle("Dice Roll")
            .setDescription(random + 1)
            .setColor(15158332)

        message.channel.send(embed)
    }
}