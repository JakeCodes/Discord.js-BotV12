const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "roll",
    description: "Rolls Dice!",
    aliases: ["diceroll", "rolldice"],
    run: (message, args) => {
        var embed = new MessageEmbed()
            .setTitle("Dice Roll")
            .setDescription(`${Math.floor(Math.random() * 6) + 1}`)
            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}