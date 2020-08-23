const prefix = process.env.PREFIX.toLowerCase();

module.exports = (client, message) => {
    // set status and log when ready
    client.user.setActivity( `${prefix}help`, {
        type: "LISTENING",
      });
      console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
}