const snekfetch = require('snekfetch');
module.exports = {
    name: "cutekitty",
    description: "Say hy to the lil' kitten",
    args: false,
    usage: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        const { body } = await snekfetch.get('https://aws.random.cat/meow').catch((err) => {
			console.log(err);
			return message.reply("there was an error running this command.");
		});

        message.channel.send(body.file);
    },
};