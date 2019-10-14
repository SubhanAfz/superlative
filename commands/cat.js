const fetch = require("node-fetch");
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

        let { file } = await fetch("https://aws.random.cat/meow").then(res => res.json());
            
        if(!file) return message.reply("It broke! Try again!")
        let embed = new discord.RichEmbed()
        .setColor(colours.light_blue)
        .setAuthor("Superlative")
        .setImage(file)
        message.channel.send({embed:embed})
    }
}