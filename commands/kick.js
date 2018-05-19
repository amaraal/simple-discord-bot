module.exports = {
  name: "kick",
  description: "Gives someone the boot.",
  args: false,
  usage: "<target>",
  guildOnly: true,
  execute(message, args){
    if (!message.mentions.user.size) {
      return message.reply("you need to tag someone to kick!");
    }
    const taggedUser = message.mentions.users.first();
    message.channel.send(`You tried to kick ${taggedUser}\n...\nbut you failed miserably.`);
  },
};
