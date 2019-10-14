module.exports = class cchanneltext{
    constructor(){
        this.name = "cchanneltext",
        this.alias = ["cchanneltext"],
        this.usage = ".cchanneltext name"
    }
    async run(bot, message, args,colours)
    {
        let findroleuser =message.member.roles.find(value => value.name == "CanUseBot")
        if (!findroleuser){
            message.reply("You dont have the role!");
            return;
        }
  
          message.guild.createChannel(args[1], { type: "text"}).then(channel =>{
            
              message.reply(`Created Channel called ${args[1]} which is a text channel`)
            
          });
        
    }
}