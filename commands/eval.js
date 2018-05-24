module.exports = {
    name: "eval",
    description: "You are not using this one, buddy.",
    args: false,
    usage: "code",
    guildOnly: false,
    ownerOnly: true,
    execute(message, args){

        function clean(text) {
            if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }

        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), {code:"x1"});
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
        }

        },
};

