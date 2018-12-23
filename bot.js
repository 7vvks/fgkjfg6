const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("526121967083061248");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(** Welcome To **DALIDA**  ..♚  **), 4000)
}
});
client.login(process.env.BOT_TOKEN);
