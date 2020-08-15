const { MessageEmbed } = require("discord.js")

module.exports = (client, member) => {
    // Add role on join
    var memberRole = member.guild.roles.cache.find(role => role.name === "Member")
    member.roles.add(memberRole);

    // send onJoin embed message
    var embed = new MessageEmbed()
        .setTitle("Member Joined")
        .setDescription(`${member} joined ${member.guild.name}. Please check out <#739580438921609216>`)
        .setTimestamp()
        .setColor(15158332)
    var joinChannel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    
    joinChannel.send({embed: embed})  
}