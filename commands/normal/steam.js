const Discord = require("discord.js")

module.exports = {
    name: "steam",
    description: "returns steam profile",
    run: (message, args) => {
        var embed = new Discord.MessageEmbed()
            .setTitle("Steam Profile")
            .setDescription("https://steamcommunity.com/id/jake-codes")
            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}