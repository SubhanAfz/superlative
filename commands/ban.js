module.exports = class ban{
    constructor(){
        this.name = "ban",
        this.alias = ["b"],
        this.usage = ".ping"
    }
    async run(bot, message, args)
    {
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
}