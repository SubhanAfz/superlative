module.exports = class backwards{
    constructor(){
        this.name = "backwards",
        this.alias = ["back"],
        this.usage = ".backwards message"
    }
    async run(bot, message,args,colours)
    {
        var args1 = message.content.split(" ",2) // .backwards asdasd adsasdasd
        function reversestring(str){
            return str.split("").reverse().join("")
        }
        var messageargs = args1[1]
        var reversedmsg = reversestring(messageargs)
        message.reply(`Your reversed string is ${reversedmsg}`)
    }
}