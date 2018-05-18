module.exports = {
  name: "chat-murder",
  description: "Murders the chat.",
  execute(message, args){
    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
      return message.reply("isso não me parece um número.");
    } else if(amount < 2 || amount > 100) {
      return message.reply("esse comando só funciona com números entre 2 e 100.");
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send("Houve um erro tentando MATAR ESSE CHAT.");
    });
  },
};
