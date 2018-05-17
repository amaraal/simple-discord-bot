const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
var schedule = require('node-schedule');

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({ game: { name: 'in a working site' }, status: 'idle'});
});

bot.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    
    const args = msg.content.slice(prefix.lenght).split(' ');
    const command = args.shift().toLowerCase();
    
    if (command === 'ping') {
        msg.channel.send('Pong');
    }

});

bot.login(token);
