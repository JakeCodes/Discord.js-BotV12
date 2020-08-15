const Discord = require("discord.js")

module.exports = {
    name: "help",
    description: "help command",
    run: (message, args) => {

        if (!args[0]) {
            var embed = new Discord.MessageEmbed()
                .setTitle("Help")
                .setDescription("List of commands for me to follow")

                .addFields(
                    {name: 'Help Alls', value: `All Commands`,       inline: true },
                    {name: 'Help Music', value: `Music Commands`,   inline: true },
                    {name: 'Help Misc',    value: `Misc Commands`,  inline: true },
                )
        }

        else if (args[0] === "all") {
            var embed = new Discord.MessageEmbed()
            .setTitle("All Commands")

            .addFields(
                {name: 'Socials (No Arg)', value: `Returns My Socials`},
                {name: '8ball (Question)', value: `Returns Yes, No, Maybe`},
                {name: 'Rules (No Arg)',   value: `Returns List of Rules`},
                {name: 'Join (No Arg)',    value: `Joins VC`},
                {name: 'Leave (No Arg)',   value: `Leaves VC`},
                {name: 'Pause (No Arg)',   value: `Pauses Video`},
                {name: 'Resume (No Arg)',  value: `Resumes Video`},
                {name: 'Play (YT Link)',   value: `Plays YT Link Audio`}
            )
        }

        else if (args[0] === "music") {
            var embed = new Discord.MessageEmbed()
            .setTitle("Music Commands")

            .addFields(
                {name: 'Join (No Arg)',    value: `Joins VC`},
                {name: 'Leave (No Arg)',   value: `Leaves VC`},
                {name: 'Pause (No Arg)',   value: `Pauses Video`},
                {name: 'Resume (No Arg)',  value: `Resumes Video`},
                {name: 'Play (YT Link)',   value: `Plays YT Link Audio`}
            )
        }

        else if (args[0] === "misc") {
            var embed = new Discord.MessageEmbed()
            .setTitle("Misc Commands")

            .addFields(
                {name: 'Rules (No Arg)', value: `Returns List of Rules`},
                {name: 'Socials (No Arg)', value: `Returns My Socials`},
            )
        }

        embed.setColor(15158332)

        message.channel.send({embed: embed});
    }
}