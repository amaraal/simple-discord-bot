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

/*yt.setKey(ytToken);*/
/*const req = require("request");*/
/*const youtube = require("youtube-node");*/
/*const ytdl = require("ytdl-core");*/
/*const ffmpeg = require("ffmpeg-binaries");*/
/*const yt = new youtube();*/

//var schedule = require("node-schedule");
//if(message.author.id !== config.ownerID) return; <--- if only i can do the command.
//const Enmap = require("enmap");
//const EnmapLevel = require("enmap-level");
//const settings = new Enmap({provider: new EnmapLevel({name:"settings"})});
//const defaultSettings = {
//  prefix: "👌",
//  modRole: "Mod",
//  adminRole: "Admin",
//  welcomeChannel: "welcome",
//  welcomeMessage: "{{user}} has joined the server! :D",
//  goodbyeMessage: "{{user}} has left the server! ;-;"
//};

/*
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
function getID(str, cb){
    if (str.toLowerCase().indexOf("youtube.com") > -1) {
        cb(getYouTubeID(str));
    } else {
        search_video(str, function (id) {
            cb(id);
        });
    }
}
function addToQueue(strID) {
    if (isYoutube(strID)){
        queue.push(getYouTubeID(strID));
    } else {
        queue.push(strID)
    }
}
function search_video(query, callback) {
    yt.search(query, 2, function(error, result) {
        if (error) {
            console.log(error);
        } else {
            callback(result.items[0].id.videoId);
        }
    });
}
function playMusic(id, mess) {
    // voiceChannel = mess.member.voiceChannel;
    if(!mess.member.voiceChannel) {
        return mess.reply("you need to join an voice channel first!");
    }
    mess.member.voiceChannel.join().then(function (connection) {
       stream = ytdl("https://www.youtube.com/watch?v=" + id, {
           filter: 'audioonly'
       });
       skipReq = 0;
       skippers = [];

       dispatcher = connection.playStream(stream);
    });
}

var queue = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
*/

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



  /*if (message.content.startsWith(prefix + "play")) {

      if (queue.length > 0 || isPlaying) {
          getID(args.join(' '), function (id) {
              addToQueue(id);
              youtube.getById(id, function (err, result) {
                  if (!err) message.reply(` added ${result.items[0].snippet.title} to queue.`)
              });
          });
      } else {
          isPlaying = true;
          getID(args.join(' '), function (id) {
              queue.push("placeholder");
              if(!message.member.voiceChannel) {
                  message.reply("Please join an voice channel first.")
              }
              youtube.getById(id, function (err, result) {
                 if (!err) message.reply(` ${result.items[0].id} is now playing.`)
              });
              playMusic(id, message);
          });
      }
  }*/

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
