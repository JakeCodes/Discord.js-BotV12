const { GuildMember } = require("discord.js")

module.exports = {
    name: "clear",
    description: "clears messages",
    execute(message, args) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            if (!args[0]) return message.reply("Please define an int arg")

            message.channel.bulkDelete(args[0])
        }
        else
            message.channel.send("You do not have permissions for that!!")
    }
}