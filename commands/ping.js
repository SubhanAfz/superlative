module.exports = class ping{
    constructor(){
        this.name = "ping"
        this.alias = ["p"]
        this.usage = ".ping"
    }
    run(bot, message, args)
    {
        var ping =  message.createdTimestamp - new Date().getTime()+ " ms";
        message.reply(ping);
    }
}