module.exports = {
  name: "kick",
  description: "Gives someone the boot.",
  args: false,
  usage: "<target>",
  guildOnly: true,
  execute(message, args){
    if (!message.mentions.users.size) {
      return message.reply("you need to tag someone to kick!");
    }

    const taggedUser = message.mentions.users.first();
    if (true) {
        return message.channel.send(`You tried to kick ${taggedUser}\n...\nbut you failed miserably.`);
    }
  },
};
