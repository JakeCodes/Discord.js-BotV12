const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "kick",
    description: "kick command",
    aliases: [],
    run: (message, args) => {
        let reason;
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have permission for that!!")
        if (!args[1]) reason = "No reason"
        else reason = args.join().replace(args[0], "").replace(",", " ")

        const user =  message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user)

            if (member) {

                var embed = new MessageEmbed()
                    .setTitle("Kicked from Jake's Place")
                    .addField("Reason", reason)
                    .setColor(15158332)

                user.send(embed)

                member.kick()
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
    },
}