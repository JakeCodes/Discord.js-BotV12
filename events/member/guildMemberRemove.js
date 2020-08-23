const { MessageEmbed } = require("discord.js")

module.exports = (client, member) => {
    // Send on remove message
    var embed = new MessageEmbed()
        .setTitle("Member Left")
        .setDescription(`${member} left ${member.guild.name}`)
        .setTimestamp()
        .setColor(15158332)
    var leaveChannel = member.guild.channels.cache.find(channel => channel.name === "goodbye")
        
    leaveChannel.send({embed: embed})
}