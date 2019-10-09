module.exports = class leave{
    constructor(){
        this.name = "leave",
        this.alias = ["leave"],
        this.usage = ".leave"
    }
    async run(bot, message, args)
    {
        if (message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
            message.reply("I have left the VC!");
        }
    }
}