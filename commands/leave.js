module.exports = class leave{
    constructor(){
        this.name = "leave",
        this.alias = ["leave"],
        this.usage = ".leave"
    }
    async run(bot, message, args,colours)
    {
        let findDJ =message.member.roles.find(value => value.name == "DJ")
        if (!findDJ){
            message.reply("You dont have DJ role!");
          return;
        }
        if (message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
            message.reply("I have left the VC!");
        }
    }
}