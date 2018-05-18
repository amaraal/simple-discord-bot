module.exports = {
  name: "beep",
  description: "BOOP?",
  args: false,
  usage: false,
  execute(message, args){
    message.channel.send("BEEP BOOP I AM ROBOT");
  },
};
