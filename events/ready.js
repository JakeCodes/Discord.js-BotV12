const prefix = process.env.PREFIX.trim().toLowerCase();

module.exports = (client, message) => {
    // set status and log when ready
    client.user.setActivity( `${prefix} help`, {
        type: "LISTENING",
      });
    console.log("Bot is ready")
}