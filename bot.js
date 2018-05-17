const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
var schedule = require('node-schedule');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ game: { name: 'in a working site' }, status: 'idle'});
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');  
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        message.channel.send('Pong!');
    }
    if (command === 'beep') {
        message.channel.send('BEEP BOOP I AM ROBOT');
    }
    if (command === 'about-me') {
        message.channel.send(`Seu nome é: ${message.author}\nSeu ID unico do discord é: ${message.author.id}`)
    }
    if (command === 'about-server') {
        message.channel.send(`Este servidor se chama ${message.guild.name}\nEste servidor tem ${message.guild.memberCount} membros\nFoi criado em ${message.guild.createdAt}\nE é da região ${message.guild.region}`)
    }
    if (command === 'about-args') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}

});

client.login(token);
