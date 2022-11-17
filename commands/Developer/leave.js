const { prefix, owner } = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
    name: "leave",
    description: "send dm user message",
    aliases:[""],
    usage: `{prefix}dm @user message`,
    examples:`{prefix}dm`,
    DeveloperUser: true , // Developer User
    serverOwner: true, // Server Owner check
    run: async (client, message,args) => {

        if (!owner.includes(message.author.id)) return;
        let args = message.content.split(" ")[1];
        let Guild = client.guilds.cache.get(args);
        if (!Guild) return message.channel.send(`**Invalid Server ID**`);
        Guild.leave();
        message.channel.send(`Done Leave \`${Guild.name}\``);
    
    }
}