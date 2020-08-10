require('dotenv').config();
prefix = process.env.PREFIX

module.exports = (client, message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

        message.content = message.content.toLowerCase()

        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase();


        // Normal commands
        if (command === "ping")
            client.commands.get("ping").run(message, args)

        else if (command === "help")
            client.commands.get("help").run(message, args)
        
        else if (command === "rules")
            client.commands.get("rules").run(message, args)

        else if (command === "website")
            client.commands.get("website").run(message, args)

        else if (command === "8ball")
            client.commands.get("8ball").run(message, args)


        // Admin Commands
        else if (command === "clear")
            client.commands.get("clear").run(message, args)

        else if (command === "kick")
            client.commands.get("kick").run(message, args)
            
        else if (command === "ban")
            client.commands.get("ban").run(message, args)

        else if (command === "unban")
            client.commands.get("unban").run(message, args) 
}