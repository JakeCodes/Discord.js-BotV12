const { MessageEmbed } = require("discord.js")
const emotes = require ("../../utils/emojis.json");
const { randomInt } = require("../../utils/randomInt")

module.exports = {
    name: "8ball",
    description: "random yes or no",
    aliases: ["8ball"],
    run: (message, args) => {
        if (!args[0]) return message.reply(`Please define a question ${emotes.error}`)

        const answers = ["It is certain.",

                         "It is decidedly so.",

                         "Without a doubt.",

                         "Yes - definitely.",

                         "You may rely on it.",

                         "As I see it, yes.",

                         "Most likely.",

                         "Outlook good.",

                         "Yes.",

                         "Signs point to yes.",

                         "Reply hazy, try again.",

                         "Ask again later.",

                         "Better not tell you now.",

                         "Cannot predict now.",

                         "Concentrate and ask again.",

                         "Don't count on it.",

                         "My reply is no.",

                         "My sources say no.",

                         "Outlook not so good.",

                         "Very doubtful."
                        ]

        const random = randomInt(args)

        var embed = new MessageEmbed()
            .setTitle("8Ball")
            .setDescription(`${answers[random]}`)      
            .setColor(15158332)

        message.channel.send(embed);
    }
}