const Discord = require("discord.js")
const {
  rolename1,
  rolename2,
  rolename3,
  rolename4,
  roleid1,
  roleid2,
  roleid3,
  roleid4 } = require("../../config.json");

module.exports = async (client, interaction) => {


  if (interaction.customId == "ROLE1") {
    if(!interaction.member.roles.cache.has(`${rolename1}`)) { // اسم الرتبه
      interaction.member.roles.add(roleid1) // اي دي الرتبه
     await interaction.message.channel.send(`add role **<&${rolename1}>**`);
      } 
      else {
        if(interaction.member.roles.cache.has(`${rolename1}`)) { // اسم الرتبه
          interaction.member.roles.remove(roleid1) // اي دي الرتبه
         await interaction.message.channel.send(`delete role **<&${rolename1}>**`);
          }
      }
  }// end


  if (interaction.customId == "ROLE2") {
    if(!interaction.member.roles.cache.has(`${rolename2}`)) { // اسم الرتبه
      interaction.member.roles.add(roleid2) // اي دي الرتبه
     await interaction.message.channel.send(`add role **<&${rolename2}>**`);
      } 
      else {
        if(interaction.member.roles.cache.has(`${rolename2}`)) { // اسم الرتبه
          interaction.member.roles.remove(roleid2) // اي دي الرتبه
         await interaction.message.channel.send(`delete role **<&${rolename2}>**`);
          }
      }
  }// end



  if (interaction.customId == "ROLE3") {
    if(!interaction.member.roles.cache.has(`${rolename3}`)) { // اسم الرتبه
      interaction.member.roles.add(roleid3) // اي دي الرتبه
     await interaction.message.channel.send(`add role **<&${rolename3}>**`);
      } 
      else {
        if(interaction.member.roles.cache.has(`${rolename3}`)) { // اسم الرتبه
          interaction.member.roles.remove(roleid3) // اي دي الرتبه
         await interaction.message.channel.send(`delete role **<&${rolename3}>**`);
          }
      }
  }// end


  if (interaction.customId == "ROLE4") {
    if(!interaction.member.roles.cache.has(`${rolename4}`)) { // اسم الرتبه
      interaction.member.roles.add(roleid4) // اي دي الرتبه
     await interaction.message.channel.send(`add role **<&${rolename4}>**`);
      } 
      else {
        if(interaction.member.roles.cache.has(`${rolename4}`)) { // اسم الرتبه
          interaction.member.roles.remove(roleid4) // اي دي الرتبه
         await interaction.message.channel.send(`delete role **<&${rolename4}>**`);
          }
      }
  }// end





}