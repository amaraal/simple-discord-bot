const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NDM3Nzg2MzMzNjc5OTc2NDQ4.DcEhmg.WjurPxHZL9W9QFdEJd_sSMMCWF0';

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg =>{
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
    if (msg.content === 'qual meu avatar seu lixo?') {
        msg.reply(msg.author.avatarURL);
    }
});

bot.login(token);
