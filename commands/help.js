const { prefix } = require("../config.json");
module.exports = {
  name: "help",
  description: "Gives ya some help!",
  usage: "[command name]",
  execute(message, args) {
    const { commands } = message.client;
    const data = [];

    if (!args.length) {
      data.push("These are all my commands:");
      data.push(commands.map(command => command.name).join(", "));
      data.push(`\nSend \`${prefix}help [command name]\` for command especific help!`);
    }
    else {
      if (!commands.has(args[0])){
        return message.reply("that isn't a valid command!");
      }
      const command = commands.get(args[0]);

      data.push(`**Nome:** ${command.name}`);

      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
      message.author.send(data, {split: true})
          .then(() => {
              if (message.channel.type !== "dm") {
                  message.channel.send("I have sent you a dm with help for that command!");
              }
          })
          .catch(() => message.reply("seems like I can't dm you."));
      return;
    }
    message.author.send(data, {split: true})
      .then(() => {
        if (message.channel.type !== "dm") {
          message.channel.send("I have sent you a dm with all my commands!");
        }
      })
      .catch(() => message.reply("seems like I can't dm you."));
  },
};
