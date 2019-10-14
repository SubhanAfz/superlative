const fetch = require("node-fetch")
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

        const { data: { image } } = await fetch("https://apis.duncte123.me/meme").then(res => res.json());
            
            
            
        

        if(!image) return message.reply("It broke! Try again!")
        let embed = new discord.RichEmbed()
        .setColor(colours.light_blue)
        .setAuthor("Superlative")
        .setImage(image)
        message.channel.send({embed:embed})
    }
    
}