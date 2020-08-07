module.exports = {
    name: "unban",
    description: "unban command",
    run: (message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission for that!!")
        const member = args[0]

        if (!member) {
            return message.reply("Please mention a user")
        }

        try {
            message.guild.fetchBans()
            .then(bans => {
                message.guild.members.unban(member)
            })
            message.channel.send(`${member} has been unbanned`)
        }
        catch (e) {
            return message.channel.send("An error has occured")
        }
    }
}