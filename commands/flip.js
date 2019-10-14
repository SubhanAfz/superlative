module.exports = class flip{
    constructor(){
        this.name = "flip",
        this.alias = ["flip"],
        this.usage = ".flip"
    }
    async run(bot, message, args,colours)
    {
        var chance = Math.floor(Math.random()*2);
        if (chance === 1){
        message.reply("Coin landed on heads!")
        }
        if (chance === 0){
         message.reply("Coin landed on tails!")
        }
    }
}