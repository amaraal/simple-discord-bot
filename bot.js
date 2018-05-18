const { prefix, token } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
//var schedule = require("node-schedule");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: "BEING HEAVILY CODED AND MODIFIED" }, status: "occupied"});
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    message.channel.send("Pong!");
  }
  if (command === "beep") {
    message.channel.send("BEEP BOOP I AM ROBOT");
  }
  if (command === "about-me") {
    message.channel.send(`Seu nome é: ${message.author}\nSeu ID unico do discord é: ${message.author.id}`);
  }
  if (command === "about-server") {
    message.channel.send(`Este servidor se chama ${message.guild.name}\nEste servidor tem ${message.guild.memberCount} membros\nFoi criado em ${message.guild.createdAt}\nE é da região ${message.guild.region}`);
  }
  if (command === "about-args") {
    if (!args.length) {
      return message.channel.send(`Você não me deu nenhum argumento, ${message.author}!`);
    } else if (args[0] === "foo") {
      return message.channel.send("bar");
    }

    message.channel.send(`Primeiro argumento: ${args[0]}`);
  }
  if (command === "kick") {
    if (!message.mentions.user.size) {
      return message.reply("você precisa mencionar alguem para kicar!");
    }
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Você tentou kicar o membro ${taggedUser}`);
  }
  if (command === "avatar") {
    if (!message.mentions.users.size) {
      return message.channel.send(`Seu avatar é: ${message.author.displayAvatarURL}`);
    }

    const listaAvatares = message.mentions.users.map(user =>{
      return `O avatar de ${user.username} é: ${user.displayAvatarURL}`;
    });

    message.channel.send(listaAvatares);
  }
});

client.login(token);
