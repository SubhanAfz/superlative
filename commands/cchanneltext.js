module.exports = class cchanneltext{
    constructor(){
        this.name = "cchanneltext",
        this.alias = ["cchanneltext"],
        this.usage = ".cchanneltext name"
    }
    async run(bot, message, args)
    {
      let memberrole = message.guild.member(user)
      let botroleuser = memberrole.roles.find("name","CanUseBot")
      if (!botroleuser) message.reply("You need to be have the CanUse Role")
  
          message.guild.createChannel(args[1], { type: "text"}).then(channel =>{
            
              message.reply(`Created Channel called ${args[1]} which is a text channel`)
            
          });
        
    }
}