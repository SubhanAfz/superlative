module.exports = class createchannel{
    constructor(){
        this.name = "createchannel",
        this.alias = ["createc"],
        this.usage = ".createchannel"
    }
    async run(bot, message, args)
    {
        if (args[2] != "text" || "voice"){
            message.reply(`You didn't specify the type of channel!`)
            return;
            }
  
          message.guild.createChannel(args[1], { type: args[2]}).then(channel =>{
            if (args[2] != "text" || "voice"){
              message.reply(`Created Channel called ${args[1]} which is a text channel`)
            }
            else{
            message.reply(`Created channel called ${args[1]} which is a ${args[2]} channel`);
            }
          });
        
    }
}