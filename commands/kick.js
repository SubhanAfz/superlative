module.exports = class kick{
    constructor(){
        this.name = "kick"
        this.alias = ["k"]
        this.usage = ".kick @user"
    }
    async run(bot, message, args,colours)
    {
      let findroleuser =message.member.roles.find(value => value.name == "CanUseBot")
        if (!findroleuser){
            message.reply("You dont have the role!");
            return;
        }
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
}