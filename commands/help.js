const { prefix } = require("../config.json");
module.exports = {
  name: "help",
  description: "Faz uma lista dos comandos ou da informação especifica.",
  usage: "[command name]",
  execute(message, args) {
    const { commands } = message.client;
    const data = [];

    if (!args.length) {
      data.push("Estes são todos os meus comandos:");
      data.push(commands.map(command => command.name).join(", "));
      data.push(`\nVocê pode enviar \`${prefix}help [command name]\` para informação especifica dos comandos!`);
    }
    else {
      if (!commands.has(args[0])){
        return message.reply("isso não é um comando válido!");
      }
      const command = commands.get(args[0]);

      data.push(`**Nome:** ${command.name}`);

      if (command.description) data.push(`**Descrição:** ${command.description}`);
      if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);
    }
    message.author.send(data, {split: true})
      .then(() => {
        if (message.channel.type !== "dm") {
          message.channel.send("Eu te enviei uma DM com todos os meus comandos!");
        }
      })
      .catch(() => message.reply("parece que eu não posso te enviar DMs"));
  },
};
