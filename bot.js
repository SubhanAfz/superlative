// Modules and Dependencies
const discord = require("discord.js");
const colours = require("./colours.json");
const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
  folder: __dirname + '/commands/',
  prefix: ['.']
});


// Global Constants
const bot = new discord.Client();
const token = process.env.token;




//log on
bot.on("ready", () => {
    console.log("logged on");
    bot.user.setActivity("Bot is online!",{type: "STREAMING"});
});



bot.on("message", message =>{
  if(message.channel.type === 'dm') return;
  if(message.author.type === 'bot') return;
  
  let botRole = message.guild.roles.find(value => value.name == "CanUseBot")
  let DJ = message.guild.roles.find(value => value.name == "DJ")
  const member = message.member;
  
  if(!botRole){
    member.guild.createRole({
      name: "CanUseBot",
      color: "#949494"
    }).then(function(){
      message.reply("There wasn't a CanUseBot role, created one!");
    });
  }
  if(!DJ){
    member.guild.createRole({
      name: "DJ",
      color: "#1569bd"
    }).then(function(){
      message.reply("There wasn't a DJ role, created one!")
    });
  }
  let user = message.author
  if (!user) return;
  //let findroleuser =message.member.roles.find(value => value.name == "CanUseBot")
  //      if (!findroleuser){
  //          message.reply("You dont have the role!");
  //          return;
  //      }

  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  
  
  
  if(!cmd) return;

  try{
      cmd.run(bot,message,args,colours)
  }catch(e){
      console.log(e)
  }
});    

bot.login(token)  
