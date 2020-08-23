const prefix = process.env.PREFIX.toLowerCase();
const { update_membercount } = require("../../utils/update_membercount")

module.exports = (client) => {
    // set status and log when ready
    update_membercount(client)

    client.user.setActivity( `${prefix}help`, {
        type: "LISTENING",
    });
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
}