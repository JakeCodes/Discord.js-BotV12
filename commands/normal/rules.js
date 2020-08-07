const Discord = require("discord.js")

module.exports = {
    name: "rules",
    description: "returns embeded list of rules",
    run: (message, args) => {
        var embed = new Discord.MessageEmbed()
            .setTitle("Rules")
            .setDescription("Please Follow")
            .addField('#1', `Don't Swear!`)
            .addField(`#2`, `Don't bully`)
            .addField(`#3`, `Be a good person`)
            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}