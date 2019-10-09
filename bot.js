// Modules and Dependencies
const discord = require("discord.js");
const colours = require("./colours.json")
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
    if(!message.guild) return;
    if (message.author.equals(bot.user))  return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    
    
    
    if (args[0] == "ping"){
        var ping =  message.createdTimestamp - new Date().getTime()+ " ms";
        message.reply(ping);
        
    }
    if (args[0] == "kick"){
        var user = message.mentions.users.first();
        
        if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
              /**
               * Kick the member
               * Make sure you run this on a member, not a user!
               * There are big differences between a user and a member
               */
              member.kick(args[2]).then(() => {
                // We let the message author know we were able to kick the person
                message.reply(`Successfully kicked ${user.tag}`);
              }).catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply('I was unable to kick the member');
                // Log the error
                console.error(err);
              });
            } else {
              // The mentioned user isn't in this guild
              message.reply('That user isn\'t in this guild!');
            }
          // Otherwise, if no user was mentioned
          } else {
            message.reply('You didn\'t mention the user to kick!');
          }
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
      randomnumber = math.random();
      randomrounded = math.round(randomnumber);
      if (randomrounded = 1)
      {
        message.reply("It is heads!");
      }
      else
      {
        message.reply("It is tails!");
      }
    }
      
    


});    




bot.login(token)