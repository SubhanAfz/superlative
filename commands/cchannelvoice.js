module.exports = class cchannelvoice{
    constructor(){
        this.name = "cchannelvoice",
        this.alias = ["cchannelvoice"],
        this.usage = ".cchannelvoice name"
    }
    async run(bot, message, args,colours)
    {
        let findroleuser =message.member.roles.find(value => value.name == "CanUseBot")
        if (!findroleuser){
            message.reply("You dont have the role!");
            return;
        }
       
          message.guild.createChannel(args[1], { type: "voice"}).then(channel =>{
            
              message.reply(`Created Channel called ${args[1]} which is a voice channel`)
            
          });
        
    }
}   