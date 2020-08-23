function update_membercount(client) {
    var guild = client.guilds.cache.get("737063850507108373")

    var channel = guild.channels.cache.get("747136614282690701")
    channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    console.log(guild.memberCount)
}

module.exports = {
    update_membercount
}