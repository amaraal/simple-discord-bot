module.exports = {
  name: "kick",
  description: "Gives someone the boot.",
  args: false,
  usage: "<target>",
  guildOnly: true,
  execute(message, args){
    if (!message.mentions.user.size) {
      return message.reply("você precisa mencionar alguem para kickar!");
    }
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Você tentou kickar o membro ${taggedUser}`);
  },
};
