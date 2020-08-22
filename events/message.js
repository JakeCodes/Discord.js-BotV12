const prefix = process.env.PREFIX.toLowerCase();

module.exports = (client, message) => {
    if (message.author.bot) return;

    message.content = message.content.toLowerCase()
  
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift()
  
    const cmd = client.commands.get(command);
  
    if (!cmd) return;
  
    cmd.run(message, args);
};