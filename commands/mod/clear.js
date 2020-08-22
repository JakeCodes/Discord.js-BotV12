const emotes = require ("../../config/emojis.json");

module.exports = {
    name: "clear",
    description: "clears messages",
    run: (message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You do not have permission for that!! ${emotes.error}`)
            if (!args[0]) return message.reply(`Please define an int arg ${emotes.error}`)

            message.channel.bulkDelete(args[0])

    }
}