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

                .addFields(
                    {name: '`Jake Join`',    value: `Joins VC`},
                    {name: '`Jake Leave`',   value: `Leaves VC`},
                    {name: '`Jake Play`',   value: `Plays audio`},
                    {name: '`Jake Clear-Queue`',   value: `Clears Queue`},
                    {name: '`Jake Filter`',   value: `Filter`},
                    {name: '`Jake Loop`',   value: `Loops through the song`},
                    {name: '`Jake Np`',   value: `Returns the song the is being played`},
                    {name: '`Jake Pause`',   value: `Pauses song`},
                    {name: '`Jake Resume`',   value: `Resumes song`},
                    {name: '`Jake Shuffle`',   value: `Randomizes queue`},
                    {name: '`Jake Skip`',   value: `Skips song`},
                    {name: '`Jake Stop`',   value: `Stops song & queue`},
                    {name: '`Jake Volume`',   value: `Changes Volume`},
                )
        }
        
        else if (args[0] === "games" || args[0] === "game") {
            var embed = new MessageEmbed()
                .setTitle("Game Commands")

                .addFields(
                    {name: '`Jake 8ball`', value: `Returns Yes, No, Maybe`},
                    {name: '`Jake Roll`', value: `Returns a number between 1 & 6`},
                    {name: '`Jake Random`', value: `Returns a string from your args`},
                )
        }

        else if (args[0] === "info") {
            var embed = new MessageEmbed()
                .setTitle("Info Commands")

                .addFields(
                    {name: '`Jake Rules`', value: `Returns List of Rules`},
                    {name: '`Jake Socials`', value: `Returns My Socials`},
                    {name: '`Jake Hardware`', value: `Returns My Hardware`},
                    {name: '`Jake Ping`', value: `Returns the bots ping`},
                )
        }

        else return message.reply("Not defined")

        embed.setColor(15158332)

        message.channel.send(embed);
    }
}