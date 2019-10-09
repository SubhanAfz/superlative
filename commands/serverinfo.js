module.exports = class serverinfo{
    constructor(){
        this.name = "serverinfo",
        this.alias = ["sinfo"],
        this.usage = ".serverinfo"
    }
    async run(bot, message, args)
    {
        let msgembed = new discord.RichEmbed()
        .setColor(colours.light_blue)
        .setTitle(`${message.guild.name} Server Info`)
        .addField("Server Name:", `${message.guild.name}`,true)
        .addField("Server Owner:",`${message.guild.owner}`,true)
        .addField("Member Count:", `${message.guild.memberCount}`)
        .setFooter("Superlative | All Purpose Discord bot");
        message.reply({embed:msgembed});
    }
}