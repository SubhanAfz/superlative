module.exports = class cchanneltext{
    constructor(){
        this.name = "cchanneltext",
        this.alias = ["cchanneltext"],
        this.usage = ".cchanneltext name"
    }
    async run(bot, message, args)
    {
                    
  
          message.guild.createChannel(args[1], { type: "text"}).then(channel =>{
            
              message.reply(`Created Channel called ${args[1]} which is a text channel`)
            
          });
        
    }
}