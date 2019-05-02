const fs = require("fs");
const Discord = require("discord.js");
const cheerio = require("cheerio"), querystring = require("querystring"), request = require("snekfetch");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: `Say 👌help | I am in ${client.guilds.size} guilds! ` }, status: "online"});
  //search_video('meme');
});

client.commands = new Discord.Collection();
const { prefix, token, ytToken, ownerID } = require("./config.json");
const commandFiles = fs.readdirSync("./commands");

client.on("guildCreate", guild => {
  console.log(`I joined a guild called ${guild.name}, it has ${guild.memberCount} members.`);
  client.user.setPresence({ game: { name: `Say 👌help | I am in ${client.guilds.size} guilds! ` }, status: "online"});
  //settings.set(guild.id, defaultSettings);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from the guild ${guild.name} which had ${guild.memberCount} members.`);
  client.user.setPresence({ game: { name: `Say 👌help | I am in ${client.guilds.size} guilds! ` }, status: "online"});
  //settings.delete(guild.id);
});

client.on("guildMemberAdd", member => {
  //const guildConf = settings.get(member.guild.id);
  //const welcomeMessage = guildConf.welcomeMessage.replace("{{user}}", member.user.tag);
  const channel = member.guild.channels.find("name", "member-log");
  if (!channel) return;
  channel.send(`Welcome ${member}! :D`);
});

client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find("name", "member-log");
  //const guildConf = settings.get(member.guild.id);
  //const goodbyeMessage = guildConf.goodbyeMessage.replace("{{user}}", member.user.tag);
  if (!channel) return;
  channel.send(`Goodbye, ${member} ;-;...`);
});

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", message =>{
  if(message.author.bot) return;
  //const guildConf = settings.get(message.guild.id);

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);

  if (!client.commands.has(commandName)) return;

  if (command.guildOnly && message.channel.type !== "text") {
    return message.reply("This command doesn't work here.");
  }

  if (command.ownerOnly && message.author.id !== ownerID) {
    return message.reply(`Only <@${ownerID}> can use that command!`);
  }

  if (command.args && !args.length) {
    let reply = `You didn't give arguments, ${message.author}!`;

    if (command.usage){
      reply += `\nThe correct usage would be: \n${prefix}${commandName} ${command.usage}`;
    }

    return message.channel.send(reply);
  }
  
  try {
    command.execute(message, args);
  }
  catch (error) {
    console.error(error);
    message.reply("there was an error while running this command!");
  }
});

client.login(token).catch((err) =>{
    console.log(err);
});
