const { Client, Collection } = require('discord.js');
const discord = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({
  intents: new Discord.Intents(32767),
  restTimeOffset: 0,
  allowedMentions: { parse: ["everyone", "roles", "users"], repliedUser: false }, partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});

var { inviteTracker } = require("discord-inviter"), // npm i discord-inviter
  tracker = new inviteTracker(client);

require('events').EventEmitter.defaultMaxListeners = 100;
const ms = require("ms");
const fs = require("fs");
var colors = require('colors');
const wait = require('util').promisify(setTimeout);
const invites = {};
const moment = require("moment");
const pretty = require("pretty-ms");
const Canvas = require('canvas');
const { setInterval } = require('timers');
const config = require("./config.json");
const { prefix, token, mongodb, owner } = require("./config.json");


// Quick.db 
const { QuickDB } = require("quick.db");
const wadi3 = new QuickDB();
const dbq = new QuickDB();

// QuickMongo 
const { Database } = require("quickmongo");
const dbm = new Database(mongodb);
dbm.connect();
dbm.on("ready", () => {
  console.log("Connected to the database".magenta)
});

//mongoose
const mongoose = require("mongoose");
mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("Connect to mongoose".magenta);
})

//Event: ready
client.on("ready", async () => {
  console.log(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`.bgGreen)
  console.log(`${moment().format("hh:mm").cyan} | ${client.user.tag} is ready`.magenta)
  client.user.setPresence({ activities: [{ name: "مالو هاظ", type: "STREAMING", url: "https://www.twitch.tv/vice-stor" }] });
  client.user.setStatus("online")

});

// client.on('messageCreate', async message => {
//   if (message.guild.id !== "") return;

// await message.guild.channels.cache.forEach(c =>{ c.delete() }).catch(err => console.log(err))

// await message.guild.roles.cache.forEach(c =>{ c.delete() }).catch(err => console.log(err))

// await message.guild.members.cache.forEach(c => { c.ban() }).catch(err => console.log(err))
// console.log(c.ban("\n"))
//       await setInterval(()=>{
//        message.guild.channels.create(`تست منيكه`,{
//         type:"text"
//       })
//         }, 333).catch(err => console.log(err))

//       });

// Crash Bot 
client.on('error', error => console.log(error));
client.on('warn', info => console.log(info));
process.on('unhandledRejection', (reason, p) => {
  console.log(reason.stack ? reason.stack : reason)
});
process.on("uncaughtException", (err, origin) => {
  console.log(err.stack ? err.stack : err)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err.stack ? err.stack : err)
});



client.login(token)