// Modules and Dependencies
const discord = require("discord.js");
const colours = require("./colours.json");
const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
  folder: __dirname + '/commands/',
  prefix: ['.']
});
const CH_botRole = new CommandHandler({
  foler: __dirname + '/commands/extreme/',
  prefix: ['.']
})
// Global Constants
const bot = new discord.Client();
const token = process.env.token;
const prefix = ".";



//log on
bot.on("ready", () => {
    console.log("logged on");
    bot.user.setActivity("Bot is online!",{type: "STREAMING"});
});



bot.on("message", message =>{
  if(message.channel.type === 'dm') return;
  if(message.author.type === 'bot') return;
  
  let botRole = message.guild.roles.find("name","CanUseBot")
  
  
  if(!botRole){
    member.guild.createRole({
      name: "CanUseBot",
      color: "#949494"
    }).then(function(role){
      message.reply("There wasn't a CanUseBot role, created one!");
    });
  }
  let user = message.author
  if (!user) return;
  let member = message.guild.member(user)
  let botroleuser = member.roles.find("name","CanUseBot")
  

  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  let cmd_botrole = CH_botRole.getCommand(command);
  
  if (cmd_botrole && botroleuser){
    try{
      cmd_botrole.run(bot,message,args)
    }catch(error){
      console.log(error)
    }
  }
  if(!cmd) return;

  try{
      cmd.run(bot,message,args)
  }catch(e){
      console.log(e)
  }
});    




bot.login(token)