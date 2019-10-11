module.exports = class cchannelvoice{
    constructor(){
        this.name = "cchannelvoice",
        this.alias = ["cchannelvoice"],
        this.usage = ".cchannelvoice name"
    }
    async run(bot, message, args)
    {
        let botroleuser =message.member.roles.find(function(value){
           return value.role.name === "CanUseBot" 
        });
        if (!botroleuser){
            message.reply("You need to be have the CanUseBot Role")
            return;
        } 
          message.guild.createChannel(args[1], { type: "voice"}).then(channel =>{
            
              message.reply(`Created Channel called ${args[1]} which is a voice channel`)
            
          });
        
    }
}   