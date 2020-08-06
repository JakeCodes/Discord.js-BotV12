var website = "https://jakecodes.com/"
const Discord = require("discord.js")

module.exports = {
    name: "website",
    description: "returns website link",
    execute(message, args) {
        var embed = new Discord.MessageEmbed()
            .setTitle("Jake Codes")
            .setDescription(`${website}`)
            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}