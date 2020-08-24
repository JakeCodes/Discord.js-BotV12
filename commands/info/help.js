const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "help",
    description: "help command",
    aliases: [],
    run: (message, args) => {
        if (!args[0]) {
            var embed = new MessageEmbed()
                .setTitle("Help")
                .setDescription("List of commands for me to follow")

                .addFields(
                    {name: '`Jake Help Music`', value: `Music Commands`},
                    {name: '`Jake Help Games`', value: `Game Commands`},
                    {name: '`Jake Help Info`',    value: `Misc Commands`},
                )
        }

        else if (args[0] === "music") {
            var embed = new MessageEmbed()
                .setTitle("Music Commands")
                .setDescription("`Play`, `Clear-Queue`,`Filter`, `Loop`,`Np`, `Pause`,`Resume`, `Shuffle`,`Skip`, `Stop`,`Volume`")
                .setFooter("Remember to have jake before each command")
        }
        
        else if (args[0] === "games" || args[0] === "game") {
            var embed = new MessageEmbed()
                .setTitle("Game Commands")
                .setDescription("`8ball`, `Roll`,`Random`")
                .setFooter("Remember to have jake before each command")
        }

        else if (args[0] === "info") {
            var embed = new MessageEmbed()
                .setTitle("Info Commands")
                .setDescription("`Rules`, `Socials`,`Hardware`,`Ping`")
                .setFooter("Remember to have jake before each command")
        }

        else return message.reply("Not defined")

        embed.setColor(15158332)

        message.channel.send(embed);
    }
}