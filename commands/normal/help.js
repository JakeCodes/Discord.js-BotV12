const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "help",
    description: "help command",
    aliases: [],
    run: async (message, args) => {
        
        args[0] = args[0].toLowerCase()
        if (!args[0]) {
            var embed = new MessageEmbed()
                .setTitle("Help")
                .setDescription("List of commands for me to follow")

                .addFields(
                    {name: '`Jake Help All`', value: `All Commands`,       inline: true },
                    {name: '`Jake Help Music`', value: `Music Commands`,   inline: true },
                    {name: '`Jake Help Games`', value: `Game Commands`,   inline: false },
                    {name: '`Jake Help Misc`',    value: `Misc Commands`,  inline: false },
                )
        }

        else if (args[0] === "all") {
            var embed = new MessageEmbed()
                .setTitle("All Commands")

                .addFields(
                    {name: '`Jake Socials` (No Arg)',  value: `Returns My Socials`},
                    {name: '`Jake Hardware` (No Arg)', value: `Returns My Hardware`},
                    {name: '`Jake 8ball` (Question)',  value: `Returns Yes, No, Maybe`},
                    {name: '`Jake Rules` (No Arg)',    value: `Returns List of Rules`},
                    {name: '`Jake Join` (No Arg)',     value: `Joins VC`},
                    {name: '`Jake Leave` (No Arg)',    value: `Leaves VC`},
                    {name: '`Jake Pause` (No Arg)',    value: `Pauses Video`},
                    {name: '`Jake Resume` (No Arg)',   value: `Resumes Video`},
                    {name: '`Jake Play` (YT Link)',    value: `Plays YT Link Audio`}
                )
        }

        else if (args[0] === "music") {
            var embed = new MessageEmbed()
                .setTitle("Music Commands")

                .addFields(
                    {name: '`Jake Join` (No Arg)',    value: `Joins VC`},
                    {name: '`Jake Leave` (No Arg)',   value: `Leaves VC`},
                    {name: '`Jake Pause` (No Arg)',   value: `Pauses Video`},
                    {name: '`Jake Resume` (No Arg)',  value: `Resumes Video`},
                    {name: '`Jake Play` (YT Link)',   value: `Plays YT Link Audio`}
                )
        }
        
        else if (args[0] === "games" || args[0] === "game") {
            var embed = new MessageEmbed()
                .setTitle("Game Commands")

                .addFields(
                    {name: '`Jake 8ball` (Question)', value: `Returns Yes, No, Maybe`},
                    {name: '`Jake Roll` (No Arg)', value: `Returns a number between 1 & 6`},
                )
        }

        else if (args[0] === "misc") {
            var embed = new MessageEmbed()
                .setTitle("Misc Commands")

                .addFields(
                    {name: '`Jake 8ball` (Question)', value: `Returns Yes, No, Maybe`},
                    {name: '`Jake Help Games`', value: `Game Commands`,   inline: false },
                    {name: '`Jake Rules` (No Arg)', value: `Returns List of Rules`},
                    {name: '`Jake Socials` (No Arg)', value: `Returns My Socials`},
                    {name: '`Jake Hardware` (No Arg)', value: `Returns My Hardware`},
                )
        }

        embed.setColor(15158332)

        message.channel.send({embed: embed});
    }
}