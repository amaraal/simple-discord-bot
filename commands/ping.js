module.exports = {
  name: "ping",
  description: "Ping-Pong is ***___cool___***",
  args: false,
  usage: false,
  execute(message, args) {
    message.channel.send("Pong.");
  },
};
