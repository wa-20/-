const {
    rolename1,
    rolename2,
    rolename3,
    rolename4,
    text,
    image } = require("../../config.json");
const Discord = require("discord.js")

module.exports = {
    name: "bo",
    description: "",
    aliases: [""],
    usage: `{prefix}`,
    examples: `{prefix}`,
    DeveloperUser: true , // Developer User
    serverOwner: true, // Server Owner check
    run: async (client, message, args) => {

        let role1 = new Discord.MessageButton()
            .setStyle("SECONDARY")  // لا تلعب هون 
            .setLabel("ter") // غير الاسم
            //.setEmoji("") // حط الاموجي 
            .setCustomId('ROLE1') // لا تلعب هون

        // let role2 = new MessageButton()
        //     .setStyle("SECONDARY")  // لا تلعب هون 
        //     .setLabel(`${rolename2 || " "}`) // غير الاسم
        //     // .setEmoji("") // حط الاموجي 
        //     .setCustomId('ROLE2') // لا تلعب هون

        // let role3 = new MessageButton()
        //     .setStyle("SECONDARY")  // لا تلعب هون 
        //     .setLabel(`${rolename3 || " "}`) // غير الاسم
        //     //.setEmoji("") // حط الاموجي 
        //     .setCustomId('ROLE3') // لا تلعب هون


        // let role4 = new MessageButton()
        //     .setStyle("SECONDARY")  // لا تلعب هون 
        //     .setLabel(`${rolename4 || " "}`) // غير الاسم
        //     //.setEmoji("") // حط الاموجي 
        //     .setCustomId('ROLE4') // لا تلعب هون


        let row = new Discord.MessageActionRow()
            .addComponents([role1])
            message.channel.send({ content: `"test`, components: [row] })

    }
}