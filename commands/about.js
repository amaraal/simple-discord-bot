module.exports = {
  name: "about",
  description: "Gets info about stuff",
  args: true,
  usage: "<me/server/this-channel/him> (if using 'him' also tag someone to be the target.)",
  guildOnly: true,
  execute(message, args){
    if (args[0] === "foo") {
      return message.channel.send("bar");
    } else if (args[0] === "me") {
      message.channel.send(`Your name is: ${message.author}\nYour ID is: ${message.author.id}`);
    } else if (args[0] === "server") {
      message.channel.send(`This guild is called ${message.guild.name}\nIt has ${message.guild.memberCount} members\nIt was created in ${message.guild.createdAt}\nIt's region is ${message.guild.region}`);

    } else if (args[0] === "him") {
      if (!message.mentions.users.size){
        return message.reply("you need to tag one or more people.");
      }

      const usInf = message.mentions.users.map(user =>{
        return `His name is: ${user.username}\nHis id is: ${user.id}`;
      });
      message.channel.send(usInf);
    } else if (args [0] === "this-channel") {
      message.channel.send(`This channels was created in ${message.channel.createdAt}\nIt's ID is: ${message.channel.id}`);
    }
  },
};
