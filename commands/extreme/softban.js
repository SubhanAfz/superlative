module.exports = class ban{
    constructor(){
        this.name = "softban",
        this.alias = ["sb"],
        this.usage = ".softban @person timeinsecs "
    }
    async run(bot, message, args)
    {
        var user = message.mentions.users.first();
        
        if (user) {
            
            const member = message.guild.member(user);
            
            if (member) {
              
              
              member.ban(member).then(() => {
                
                message.reply(`Successfully softbanned ${user.tag}`);
                setTimeout(function() {
                    member.unban(member)
                  }, parseInt(args[2]));
              }).catch(err => {
                
                message.reply('I was unable to softban the member');
                
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