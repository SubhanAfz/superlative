module.exports = class cchanneltext{
    constructor(){
        this.name = "cchanneltext",
        this.alias = ["cchanneltext"],
        this.usage = ".cchanneltext name"
    }
    async run(bot, message, args)
    {
        let botroleuser =message.member.roles.find(value =>value.role === "CanUseBot")
        if (!botroleuser){
          message.reply("You need to be have the CanUseBot Role")
          return;
        } 
  
          message.guild.createChannel(args[1], { type: "text"}).then(channel =>{
            
              message.reply(`Created Channel called ${args[1]} which is a text channel`)
            
          });
        
    }
}