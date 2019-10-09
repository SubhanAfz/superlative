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
const prefix = ".";



//log on
bot.on("ready", () => {
    console.log("logged on");
    bot.user.setActivity("Bot is online!",{type: "STREAMING"});
});



bot.on("message", message =>{
  if(message.channel.type === 'dm') return;
  if(message.author.type === 'bot') return;
  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  if(!cmd) return;

  try{
      cmd.run(bot,message,args)
  }catch(e){
      console.log(e)
  }

    
    
    
    
    
    if (args[0] == "createchannel"){
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
    if (args[0] == "serverinfo"){
      let msgembed = new discord.RichEmbed()
      .setColor(colours.light_blue)
      .setTitle(`${message.guild.name} Server Info`)
      .addField("Server Name:", `${message.guild.name}`,true)
      .addField("Server Owner:",`${message.guild.owner}`,true)
      .addField("Member Count:", `${message.guild.memberCount}`)
      .setFooter("Superlative | All Purpose Discord bot");
      message.reply({embed:msgembed});

    }
    if (args[0] == "ban"){
      var user = message.mentions.users.first();
        
        if (user) {
            
            const member = message.guild.member(user);
            
            if (member) {
              
              
              member.ban(args[2]).then(() => {
                
                message.reply(`Successfully banned ${user.tag}`);
              }).catch(err => {
                
                message.reply('I was unable to ban the member');
                
                console.error(err);
              });
            } else {
              
              message.reply('That user isn\'t in this guild!');
            }

          } else {
            message.reply('You didn\'t mention the user to kick!');
          }
      
    }
    if (args[0] == "join")
    {
      if (message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                message.guild.voiceConnection.disconnect();
            }
            else
            {
                message.member.voiceChannel.join()
                .then(connection=>{
                    message.reply("success");
                })

            }
        }
        else
            {
                message.reply("Your not in a VC");
            }
    }
    if (args[0] == "leave")
    {
      if (message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
            message.reply("I have left the VC!");
        }
    }
    if (args[0] == "flip")
    {
        var chance = Math.floor(Math.random()*2);
        if (chance === 1){
        message.reply("Coin landed on heads!")
        }
        if (chance === 0){
         message.reply("Coin landed on tails!")
        }
    }
      
    


});    




bot.login(token)