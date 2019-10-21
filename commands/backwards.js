module.exports = class backwards{
    constructor(){
        this.name = "backwards",
        this.alias = ["back"],
        this.usage = ".backwards message"
    }
    async run(bot, message,args,colours)
    {
        
        function reversestring(str){
            return str.split("").reverse().join("")
        }
        var messageargs = args[1]
        var reversedmsg = reversestring(messageargs)
        message.reply(`Your reversed string is ${reversedmsg}`)
    }
}