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
        //const embed = new Discord.RichEmbed()
        const embed = {
  "title": "ISSO É UM EMBED BEM :ok_hand:",
  "description": "[Isso](https://discordapp.com) tem a merda toda, e o skype não. ```java\nSystem.out.print('até codiguinho')```",
  "url": "https://discordapp.com",
  "color": 1018033,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/126617440464535552/84fe7b4f9e3ad8953c1633915e5030a6.webp?size=1024",
    "text": "Pé do texto é top e parace a <@126617440464535552>"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/avatars/236263074456272897/f6258a5682caee59b7bed43d5dfd699e.png"
  },
  "author": {
    "name": "TOP-BOT",
    "url": "https://github.com/PedrolinoV2",
    "icon_url": "https://cdn.discordapp.com/avatars/437786333679976448/c0f53d1c6784c00613c91a912be6d387.webp?size=1024"
  },
  "fields": [
    {
      "name": "Th🤔nk",
      "value": "Sobre sua vida, e a situação atual dela."
    },
    {
      "name": "Sc😱red",
      "value": "Tema os bots, eles ainda vão te matar! ***___hehe___***"
    },
    {
      "name": ":eye:lhe",
      "value": "O perigo esta em todo lugar."
    },
    {
      "name": "aaaaaaaaaaaaaa",
      "value": "thcooooooooooo",
      "inline": true
    },
    {
      "name": ":cry:",
      "value": "to doente agora",
      "inline": true
    }
  ]
};
        //.setTitle('Um embed 👌')
        //.setColor(0x08a384)
        //.setDescription('ISSO SIM É QUALIDADE');
        msg.channel.send(embed);
    }
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log')
    if (!channel) return;
    channel.send(`Bem vindo ao servidor, ${member}`)
})

bot.login(token);
