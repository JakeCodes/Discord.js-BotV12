const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "random",
    description: "returns random string",
    aliases: ["diceroll", "rolldice"],
    run: (message, args) => {
        
        const ar = []
        args.forEach(arg => {
            ar.push(arg);
        })
        
        const random = Math.floor(Math.random() * ar.length)
        const randomStr = ar[random]
        console.log(randomStr)

        var embed = new MessageEmbed()
            .setTitle("Random Str")
            .setDescription(`${randomStr}`)
            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}