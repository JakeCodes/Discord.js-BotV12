const { MessageEmbed } = require("discord.js")

const website = "https://jakecodes.com/contact"
const steam = "https://steamcommunity.com/id/jake-codes"
const stackoverflow = "https://stackoverflow.com/users/13073672/epix?tab=profile"
const github = "https://github.com/JakeCodes"


module.exports = {
    name: "socials",
    description: "returns socials",
    run: (message, args) => {
        var embed = new MessageEmbed()
            .addFields(
                {name: 'Website', value: `[Here](${website})`},
                {name: 'Steam', value: `[Here](${steam})`},
                {name: 'Stackoverflow', value: `[Here](${stackoverflow})`},
                {name: 'Github', value: `[Here](${github})`},
            )

            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}