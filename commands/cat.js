const superagent = require("superagent")
const discord = require("discord.js")
module.exports = class cat{
    constructor(){
        this.name = "cat",
        this.alias = ["cat"],
        this.usage = ".cat"
    }
    async run(bot, message, args,colours)
    {
        let msg = await message.channel.send("Generating...")

        let {body} = await superagent
        .get("http://aws.random.cat/meow")
        if(!body) return message.reply("It broke! Try again!")
        let embed = new discord.RichEmbed()
        .setColor(colours.light_blue)
        .setAuthor("Superlative")
        .setImage(body.file)
    }
}