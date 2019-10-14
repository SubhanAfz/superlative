const superagent = require("superagent")
const discord = require("discord.js")


module.exports = class dog{
    constructor(){
        this.name = "dog",
        this.alias = ["dog"],
        this.usage = ".dog"
    }
    async run(bot, message, args,colours)
    {
        let msg = await message.channel.send("Generating...")

        let {body} = await superagent
        .get("https://dog.ceo/api/breeds/image/random")
        if(!body) return message.reply("It broke! Try again!")
        let embed = new discord.RichEmbed()
        .setcolor(colours.light_green)
        .setauthor("Superlative")
        .setImage(body.message)
    }
}