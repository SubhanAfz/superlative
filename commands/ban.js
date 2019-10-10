module.exports = class ban{
    constructor(){
        this.name = "ban",
        this.alias = ["b"],
        this.usage = ".ban @person"
    }
    async run(bot, message, args)
    {
      
      let botroleuser =message.member.roles.find(value =>value.role === "CanUseBot")
      if (!botroleuser){
        message.reply("You need to be have the CanUseBot Role")
        return;
      } 
        var user = message.mentions.users.first();
        
        if (user) {
            
            const member = message.guild.member(user);
            
            if (member) {
              
              
              
              member.ban(member).then(() => {
                
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
}