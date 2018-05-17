const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
var schedule = require('node-schedule');

client.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({ game: { name: 'in a working site' }, status: 'idle'});
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');  
    const command = args.shift().toLowerCase();
    
    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}

});

bot.login(token);
