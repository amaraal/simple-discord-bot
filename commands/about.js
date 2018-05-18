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
      message.channel.send(`Seu nome é: ${message.author}\nSeu ID unico do discord é: ${message.author.id}`);
    } else if (args[0] === "server") {
      message.channel.send(`Este servidor se chama ${message.guild.name}\nEste servidor tem ${message.guild.memberCount} membros\nFoi criado em ${message.guild.createdAt}\nE é da região ${message.guild.region}`);

    } else if (args[0] === "him") {
      if (!message.mentions.users.size){
        return message.reply("você precisa mencionar alguem para saber sobre essa(s) pessoa(s).");
      }

      const usInf = message.mentions.users.map(user =>{
        return `O nome é: ${user.username}\nSeu ID unico do discord é: ${user.id}`;
      });
      message.channel.send(usInf);
    } else if (args [0] === "this-channel") {
      message.channel.send(`Este canal foi criado em ${message.channel.createdAt}\nE seu id unico é: ${message.channel.id}`);
    }
  },
};
