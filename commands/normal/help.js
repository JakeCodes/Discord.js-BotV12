const Discord = require("discord.js")

module.exports = {
    name: "help",
    description: "help command",
    run: (message, args) => {
        var embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription("List of commands for me to follow")

            .addField('Website (No Arg)', `Returns my website`)
            .addField(`8ball (Question)`, `Returns yes or no statement`)
            .addField(`Ping (No Arg)`, `Returns Pong`)
            .addField(`Rules (No Arg)`, `Returns List of rules`)
            .addField(`Join (No Arg)`, `Joins VC`)
            .addField(`Leave (No Arg)`, `Leaves VC`)
            .addField(`Pause (No Arg)`, `Pauses Video`)
            .addField(`Resume (No Arg)`, `Resumes Video`)
            .addField(`Play (YT Link)`, `Plays YT Link Audio`)

            .setColor(15158332)

        message.channel.send({embed: embed});
    }
}