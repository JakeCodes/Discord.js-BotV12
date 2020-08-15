const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "socials",
    description: "returns socials",
    run: (message, args) => {
        var embed = new MessageEmbed()
            .setTitle("Socials")
            .setDescription("All of my socials")

            .addFields(
                {name: 'Website', value: `https://jakecodes.com`, inline: false },
                {name: 'Steam', value: `https://steamcommunity.com/id/jake-codes`, inline: false },
                {name: 'Stackoverflow', value: `https://stackoverflow.com/users/13073672/epix?tab=profile`, inline: false },
                {name: 'Github', value: `https://github.com/JakeCodes`, inline: false },
            )

            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}