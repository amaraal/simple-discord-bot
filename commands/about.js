module.exports = {
  name: "about",
  description: "Gets info about stuff",
  execute(message, args){
    if (!args.length) {
      return message.channel.send(`Você não me deu nenhum argumento, ${message.author}!`);
    } else if (args[0] === "foo") {
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
    }
  },
};
