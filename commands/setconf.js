module.exports = {
  name: "setconf",
  description: "Sets the config for your guild.",
  args: true,
  usage: "<key> <value>",
  guildOnly: true,
  execute(message, args){
    const adminRole = message.guild.roles.find("name", guildConf.adminRole);

    if(!adminRole || !message.member.has(adminRole.id)) return message.reply("only admins can do that!");

    const key = args[0];

    if(!guildConf.hasOwnProperty(key)) return message.reply("This key isn't in the config.");

    guildConf[key] = value;

    settings.set(message.guild.id, guildConf);
    message.channel.send(`Item: ${key} has been changed to:\n\`${value}\``);
  },
};
