module.exports = {
  name: "avatar",
  description: "Gets the user's avatar.",
  args: false,
  usage: "<target> (if blank the target is you.)",
  guildOnly: false,
  execute(message, args){
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar is: ${message.author.displayAvatarURL}`);
    }

    const listaAvatares = message.mentions.users.map(user =>{
      return `${user.username}'s avatar is: ${user.displayAvatarURL}`;
    });

    message.channel.send(listaAvatares);
  },
};
