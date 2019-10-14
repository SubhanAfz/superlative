const superagent = require("superagent")
const discord = require("discord.js")
module.exports = class meme{
    constructor(){
        this.name = "meme",
        this.alias = ["meme"],
        this.usage = ".meme"
    }
    async run(bot, message, args,colours)
    {
        let msg = await message.channel.send("Generating...")

        let {body} = await superagent
        .get("https://apis.duncte123.me/meme")
        if(!body) return message.reply("It broke! Try again!")
        let embed = new discord.RichEmbed()
        .setColor(colours.light_blue)
        .setauthor("Superlative")
        .setImage(body.url)
    }
}