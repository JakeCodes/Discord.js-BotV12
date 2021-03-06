const { MessageEmbed } = require("discord.js")
const emotes = require ("../../config/emojis.json");

module.exports = {
    name: "ban",
    description: "ban command",
    aliases: [],
    run: async (message, args) => {
        let reason;
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You do not have BAN_MEMBERS permission ${emotes.error}`)
        if (!args[1]) reason = "No reason"
        else reason = args.join().replace(",", " ")

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user)

            if (member) {

                var embed = new MessageEmbed()
                    .setTitle(`Banned from ${message.guild.name}`)
                    .addField("Reason", reason)
                    .setColor(15158332)

                await member.send(embed)

                member.ban()
                    .then(() => {
                        message.reply(`Successfully banned ${user.tag} ${emotes.success}`)
                    }).catch(err => {
                        message.reply("I was unable to ban the member")
                    })
            }
            else
                message.reply("That user isn\'t in the server!")
        }
        else
            message.reply("You need to specify a person!")
    }
}