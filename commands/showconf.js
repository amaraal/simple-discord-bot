module.exports = {
  name: "showconf",
  description: "Shows the config for your guild.",
  args: false,
  usage: false,
  guildOnly: true,
  execute(message, args, settings, guildConf){
    let configKeys = "";
    Object.keys(guildConf).forEach(key =>{
      configKeys += `${key}  :  ${guildConf[key]}\n`;
    });
    message.channel.send(`This server's configs are: \`\`\`${configKeys}\`\`\``);
  },
};
