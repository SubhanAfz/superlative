const fetch = require("node-fetch")
const discord = require("discord.js")


module.exports = class dog{
    constructor(){
        this.name = "dog",
        this.alias = ["dog"],
        this.usage = ".dog"
    }
    async run(bot, m, args,colours)
    {
        let msg = await m.channel.send("Generating...")

        const { message } = await fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json());
            
            


       
        
        let embed = new discord.RichEmbed()
        .setColor(colours.light_blue)
        .setAuthor("Superlative")
        .setImage(message)
        m.channel.send({embed:embed})
    }
    
}