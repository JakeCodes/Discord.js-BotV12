const prefix = process.env.PREFIX.toLowerCase();
const { update_membercount } = require("../../utils/update_membercount")

module.exports = (client) => {
    update_membercount(client)

    // set status and log when ready
    client.user.setActivity( `${prefix}help`, {
        type: "LISTENING",
    });
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
}