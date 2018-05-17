const Discord = require('discord.js');
const bot = new Discord.Client();
var schedule = require('node-schedule');
const token = 'NDM3Nzg2MzMzNjc5OTc2NDQ4.DcEhmg.WjurPxHZL9W9QFdEJd_sSMMCWF0'; 

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({ game: { name: 'in a working site' }, status: 'idle'}).then(console.log);
});

var evil = schedule.scheduleJob('34 15 * * *', function(){
    console.log('whocares');
    //console.log('3AM');
    channel.send('3AM, O HORARIO MAIS MALVADO DE TODOS!');
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

bot.login(token);
