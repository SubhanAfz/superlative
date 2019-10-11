module.exports = class unban{
    constructor(){
        this.name = "unban",
        this.alias = ["ub"],
        this.usage = ".unban @person"
    }
    async run(bot, message, args)
    {
      let findroleuser =message.member.roles.find(value => value.name == "CanUseBot")
        if (!findroleuser){
            message.reply("You dont have the role!");
            return;
        }
        var user = message.mentions.users.first();
        
        if (user) {
            
            const member = message.guild.member(user);
            
            if (member) {
              
              
              
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