module.exports = {
  name: "avatar",
  description: "Gets the user's avatar.",
  args: false,
  usage: "<target> (if blank the target is you.)",
  guildOnly: true,
  execute(message, args){
    if (!message.mentions.users.size) {
      return message.channel.send(`Seu avatar é: ${message.author.displayAvatarURL}`);
    }

    const listaAvatares = message.mentions.users.map(user =>{
      return `O avatar de ${user.username} é: ${user.displayAvatarURL}`;
    });

    message.channel.send(listaAvatares);
  },
};
