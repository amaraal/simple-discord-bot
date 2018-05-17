const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NDM3Nzg2MzMzNjc5OTc2NDQ4.DcEhmg.WjurPxHZL9W9QFdEJd_sSMMCWF0';

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({ game: { name: 'in a working site' }, status: 'idle'}).then(console.log);
});

bot.on('message', msg =>{
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
    if (msg.content === 'qual meu avatar seu lixo?') {
        msg.reply(msg.author.avatarURL);
    }
    if (msg.content === 'como incorporar top?') {
        const embed = new MessageEmbed()
        .setTitle('Um embed 👌')
        .setColor(0x08a384)
        .setDescription('ISSO SIM É QUALIDADE');
        msg.channel.send(embed);
    }
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log')
    if (!channel) return;
    channel.send(`Bem vindo ao servidor, ${member}`)
})

bot.login(token);
