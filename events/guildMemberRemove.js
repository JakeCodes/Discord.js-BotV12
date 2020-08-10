require('dotenv').config();

module.exports = (client, message) => {
    // Send on remove message
    var embed = new Discord.MessageEmbed()
        .setTitle("Member Left")
        .setDescription(`${member} left ${member.guild.name}`)
        .setTimestamp()
        .setColor(15158332)
    var leaveChannel = member.guild.channels.cache.find(channel => channel.name === "goodbye")
        
    leaveChannel.send({embed: embed})
}