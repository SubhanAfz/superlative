module.exports = class unban{
    constructor(){
        this.name = "unban",
        this.alias = ["ub"],
        this.usage = ".unban userid"
    }
    async run(bot, message, args)
    {
      let findroleuser =message.member.roles.find(value => value.name == "CanUseBot")
        if (!findroleuser){
            message.reply("You dont have the role!");
            return;
        }
        var userid = args[1]
        
        if (user) {
              var reason = args[2]
              
              
              member.unban(userid, reason).then(() => {
                
                message.reply(`Successfully unbanned ${user.tag}`);
              }).catch(err => {
                
                message.reply('I was unable to unban the member');
                
                console.error(err);
              });
            } else {
              
              message.reply('This person is already unbanned or invalid UserId!');
            }

          
    }
}