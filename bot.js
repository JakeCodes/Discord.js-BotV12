require('dotenv').config();
const Discord = require("discord.js")
const client = new Discord.Client()
const token = process.env.TOKEN

const prefix = "!"

const fs = require('fs')
client.commands = new Discord.Collection();
const adminCMDFiles = fs.readdirSync("./commands/admin").filter(file => file.endsWith('.js'))
const normalCMDFiles = fs.readdirSync("./commands/normal").filter(file => file.endsWith('.js'))

for (const file of adminCMDFiles) {
    const adminCommand = require(`./commands/admin/${file}`);

    client.commands.set(adminCommand.name, adminCommand)
}

for (const file of normalCMDFiles) {
    const normalCommand = require(`./commands/normal/${file}`);

    client.commands.set(normalCommand.name, normalCommand)
}


client.on("ready", () => {
    // set status and log when ready
    client.user.setStatus('available')
    client.user.setActivity( "to !help", {
        type: "LISTENING",
      });
    console.log("Bot is ready")
})


client.on("guildMemberAdd", async (member) => {
    // Add Role when user joins
    let memberRole = member.guild.roles.cache.find(role => role.id == "740062376673673337")
    member.roles.add(memberRole)

    // send embed onJoin message
    var embed = new Discord.MessageEmbed()
        .setTitle("Member Joined")
        .setDescription(`${member} joined ${member.guild.name}. Please check out <#739580438921609216>`)
        .setTimestamp()
        .setColor(15158332)
    var joinChannel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    
    joinChannel.send({embed: embed})
})


client.on("guildMemberRemove", async (member) => {
    // Send on remove message
    var embed = new Discord.MessageEmbed()
        .setTitle("Member Left")
        .setDescription(`${member} left ${member.guild.name}`)
        .setTimestamp()
        .setColor(15158332)
    var joinChannel = member.guild.channels.cache.find(channel => channel.name === "goodbye")
    
    joinChannel.send({embed: embed})
})


client.on("message", async (message) => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase();

        // load commands from other files

        // Normal commands
        if (command === "ping")
            client.commands.get("ping").execute(message, args)

        else if (command === "help")
            client.commands.get("help").execute(message, args)
        
        else if (command === "rules")
            client.commands.get("rules").execute(message, args)

        else if (command === "website")
            client.commands.get("website").execute(message, args)

        else if (command === "8ball")
            client.commands.get("8ball").execute(message, args)

        // Admin Commands
        else if (command === "clear")
            client.commands.get("clear").execute(message, args)

        else if (command === "kick")
            client.commands.get("kick").execute(message, args)
            
        else if (command === "ban")
            client.commands.get("ban").execute(message, args)
})

// Login
client.login(token)