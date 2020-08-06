const Discord = require("discord.js")

module.exports = {
    name: "help",
    description: "help command",
    execute(message, args) {
        var embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription("List of commands for me to follow")
            .addField('Website (No Arg)', `Returns my website`)
            .addField(`8ball (Question Arg)`, `Returns yes or no statement`)
            .addField(`Ping (No Arg)`, `Returns Pong`)
            .addField(`Rules (No Arg)`, `Returns List of rules`)
            .setColor(15158332)

        message.channel.send({embed: embed});
    }
}