const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
var schedule = require('node-schedule');

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({ game: { name: 'in a working site' }, status: 'idle'});
    const channelObject = bot.channels.get("310915980912099329")
});

var evil = schedule.scheduleJob('27 16 * * *', function(){
    console.log('whocares');
    //console.log('3AM');
    channelObject.send('3AM, O HORARIO MAIS MALVADO DE TODOS!');
    //channel.send('3AM, O HORARIO MAIS MALVADO DE TODOS!');
});

bot.on('message', msg =>{
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
    if (msg.content === 'qual meu avatar seu lixo?') {
        msg.reply(msg.author.avatarURL);
    }
    if (msg.content === 'como incorporar top?') {
        const embed = new Discord.RichEmbed()
        .setTitle('Um embed 👌')
        .setColor(0x08a384)
        .setDescription('ISSO SIM É QUALIDADE');
        msg.channel.send(embed);
    }
    if (msg.content === 'quando voce vai trabalhar?') {
        msg.reply(`Vou trabalhar em: ${evil.nextInvocation()}`)
    }
    if (msg.content === 'alo') {
        msg.reply('DANASE VC')
    }
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Bem vindo ao servidor, ${member}`);
});
bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Eu não gostava de você mesmo, ${member}!`);
});

bot.login(config.token);
