const { MessageEmbed } = require("discord.js")
const { update_membercount } = require("../../utils/update_membercount")

module.exports = (client, member) => {
    // Add role on join
    var memberRole = member.guild.roles.cache.find(role => role.name === "Member")
    member.roles.add(memberRole);

    update_membercount(client)
    
    // send onJoin embed message
    var embed = new MessageEmbed()
        .setTitle("Member Joined")
        .setDescription(`${member} joined ${member.guild.name}. Please check out <#739580438921609216>`)
        .setTimestamp()
        .setColor(15158332)

    var joinChannel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    
    joinChannel.send({embed: embed})  
}