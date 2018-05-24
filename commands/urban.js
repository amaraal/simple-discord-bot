const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;
module.exports = {
    name: "urban",
    description: "Looks into the urban dictionary",
    args: true,
    usage: "<term>",
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: args.join(' ')});
        if(body.result_type === 'no_results') {
            return message.channel.send(`No results found for **${args.join(' ')}**`);
        }
        const [answer] = body.list;
        const embed = new Discord.RichEmbed()
            .setColor('#4286f4')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addField('Definition', trim(answer.definition, 1024))
            .addField('Example', trim(answer.example, 1024))
            .addField('Rating', `${answer.thumbs_up} 👍\n\n${answer.thumbs_down} 👎`)
            .setFooter(`Tags: ${body.tags.join(', ')}`);

        message.reply("there you go!");
        message.channel.send(embed);
    },
};