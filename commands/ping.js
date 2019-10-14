module.exports = class ping{
    constructor(){
        this.name = "ping",
        this.alias = ["p"],
        this.usage = ".ping"
    }
    async run(bot, message, args,colours)
    {
        var ping =  new Date().getTime() - message.createdTimestamp+ " ms";
        message.reply(ping);
    }
}