module.exports = class join{
    constructor(){
        this.name = "join",
        this.alias = ["join"],
        this.usage = ".join"
    }
    async run(bot, message, args)
    {
        if (message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                message.guild.voiceConnection.disconnect();
            }
            else
            {
                message.member.voiceChannel.join()
                .then(connection=>{
                    message.reply("success");
                })

            }
        }
        else
            {
                message.reply("Your not in a VC");
            }
    }
}