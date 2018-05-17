const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg =>{
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

bot.login("NDM3Nzg2MzMzNjc5OTc2NDQ4.DcEhmg.WjurPxHZL9W9QFdEJd_sSMMCWF0");
