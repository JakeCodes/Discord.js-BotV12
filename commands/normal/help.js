const Discord = require("discord.js")

module.exports = {
    name: "help",
    description: "help command",
    run: (message, args) => {
        var embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription("List of commands for me to follow")

            .addFields(
                {name: 'Website (No Arg)', value: `Returns My Website`},
                {name: '8ball (Question)', value: `Returns Yes, No, Maybe`},
                {name: 'Ping (No Arg)',    value: `Returns Pong`},
                {name: 'Rules (No Arg)',   value: `Returns List of Rules`},
                {name: 'Join (No Arg)',    value: `Joins VC`},
                {name: 'Leave (No Arg)',   value: `Leaves VC`},
                {name: 'Pause (No Arg)',   value: `Pauses Video`},
                {name: 'Resume (No Arg)',  value: `Resumes Video`},
                {name: 'Play (YT Link)',   value: `Plays YT Link Audio`}
            )

            .setColor(15158332)

        message.channel.send({embed: embed});
    }
}