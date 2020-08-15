module.exports = {
    name: "clear",
    description: "clears messages",
    run: (message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission for that!!")
            if (!args[0]) return message.reply("Please define an int arg")

            message.channel.bulkDelete(args[0])

    }
}