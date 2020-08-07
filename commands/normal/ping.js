module.exports = {
    name: "ping",
    description: "ping command",
    run: (message, args) => {
        message.channel.send(`pong`)
    }
}