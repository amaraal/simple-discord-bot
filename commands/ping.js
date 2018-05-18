module.exports = {
  name: "ping",
  description: "Ping!",
  args: false,
  usage: false,
  execute(message, args) {
    message.channel.send("Pong.");
  },
};
