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
        
        if (userid) {
              var reason = args[2]
             
              
              message.guild.unban(userid, reason).then(() => {
                
                message.reply(`Successfully unbanned ${userid.name}`);
              }).catch(err => {
                
                message.reply('I was unable to unban the member');
                
                console.error(err);
              });
            } else {
              
              message.reply('This person is already unbanned or invalid UserId!');
            }

          
    }
}