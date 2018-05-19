module.exports = {
  name: "chat-murder",
  description: "Murders the chat.",
  args: true,
  usage: "<amount of messages to delete>",
  guildOnly: true,
  execute(message, args){
    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
      return message.reply("THIS AINT NO NUMBER");
    } else if(amount < 2 || amount > 100) {
      return message.reply("this command only works with a value between 2 and 100");
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send("There was an error trying to kill this chat.");
    });
  },
};
