module.exports = class cchannelvoice{
    constructor(){
        this.name = "cchannelvoice",
        this.alias = ["cchannelvoice"],
        this.usage = ".cchannelvoice name"
    }
    async run(bot, message, args)
    {
  
          message.guild.createChannel(args[1], { type: "voice"}).then(channel =>{
            
              message.reply(`Created Channel called ${args[1]} which is a voice channel`)
            
          });
        
    }
}   