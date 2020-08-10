require('dotenv').config();

module.exports = (client, message) => {
    // Add Role when user joins
    let memberRole = member.guild.roles.cache.find(role => role.id == "740062376673673337")
    member.roles.add(memberRole)

    // send onJoin embed message
    var embed = new Discord.MessageEmbed()
        .setTitle("Member Joined")
        .setDescription(`${member} joined ${member.guild.name}. Please check out <#739580438921609216>`)
        .setTimestamp()
        .setColor(15158332)
    var joinChannel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    
    joinChannel.send({embed: embed})  
}