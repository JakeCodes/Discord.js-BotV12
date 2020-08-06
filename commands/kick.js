const Discord = require("discord.js")

module.exports = {
    name: "kick",
    description: "kick command",
    execute(message, args) {
        let reason;
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have BAN_MEMBERS permission")
        if (!args[1]) reason = "No reason"
        else reason = args.join().replace(args[0], "").replace(",", " ")

        const user =  message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user)

            if (member) {

                var embed = new Discord.MessageEmbed()
                    .setTitle("Kicked from Jake's Place")
                    .addField("Reason", reason)
                    .setColor(15158332)

                user.send({embed: embed})

                member.kick("something")
                .then(() => {
                    message.reply(`Successfully kicked ${user.tag}`)
                }).catch(err => {
                    message.reply("I was unable to kick the member")
                })
            }
            else {
                message.reply("That user isn\'t in the server!")
            }
        }
        else {
            message.reply("You need to specify a person!")
        }
    }
}