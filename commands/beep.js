module.exports = {
  name: "beep",
  description: "BOOP?",
  execute(message, args){
    message.channel.send("BEEP BOOP I AM ROBOT");
  },
};
