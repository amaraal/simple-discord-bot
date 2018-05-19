module.exports = {
  name: "kick",
  description: "Gives someone the boot.",
  args: false,
  usage: "<target>",
  guildOnly: true,
  execute(message, args){
    const adminRole = message.guild.roles.find("name", guildConf.adminRole);
    if (!message.mentions.user.size) {
      return message.reply("you need to tag someone to kick!");
    } else if (!adminRole || !message.member.has(adminRole.id)) {
      const taggedUser = message.mentions.users.first();
      message.channel.send(`You tried to kick ${taggedUser}\n...\nbut you failed miserably.`);
      return;
    }
    const taggedUser = message.mentions.users.first();
    taggedUser.kick().catch(() =>{
      console.log(`Error while trying to kick ${taggedUser}`);
      message.channel.send(`I wasn't able to kick ${taggedUser}`);
    });
  },
};
