const Discord = require("discord.js")

module.exports = {
    name: "rules",
    description: "returns embeded list of rules",
    run: (message, args) => {
        var embed = new Discord.MessageEmbed()
            .setTitle("Rules")
            .setDescription("Please Follow")

            .addFields(
                {name: '#1', value: `Don't Swear!`},
                {name: '#2', value: `Don't Bully!`},
                {name: '#3', value: `Be a good person`}
            )

            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}