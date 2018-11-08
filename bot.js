const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("508020814885552149")
setInterval(function() {
channel.send(`سبام فله`);
}, 25)
})

client.login(process.env.BOT_TOKEN);
