module.exports = {
    name: "say",
    description: "Repeat. Repeat. Repeat.",
    args: true,
    usage: "<message>",
    execute(message, args){
        const sayMessage = args.join(" ");

        message.delete().catch(O_o=>{});

        message.channel.send(sayMessage);
    },
};
