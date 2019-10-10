module.exports = class unban{
    constructor(){
        this.name = "unban",
        this.alias = ["ub"],
        this.usage = ".unban @person"
    }
    async run(bot, message, args)
    {
        var user = message.mentions.users.first();
        
        if (user) {
            
            const member = message.guild.member(user);
            
            if (member) {
              let botRole = member.roles.find("name","CanUseBot")
              if(!botRole) message.reply("Insufficent Role, You need CanUseBot Role!")
              
              
              member.unban(member).then(() => {
                
                message.reply(`Successfully unbanned ${user.tag}`);
              }).catch(err => {
                
                message.reply('I was unable to unban the member');
                
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