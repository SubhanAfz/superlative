const ytdl = require('ytdl-core');
function play(connection,message){
    var server = servers[message.guild.id]
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if (server.queue[0]){
            play(connection,message);
            
        }
        else{
            connection.disconnect();
        }
    });
    
}
var servers ={}; 
module.exports = class cchanneltext{
    constructor(){
        this.name = ".play",
        this.alias = ["play"],
        this.usage = ".play link"
    }
    async run(bot, message, args)
    {
       
        
        if(!args[1]){
            message.reply("You didn't give a link!")
            return;
        }
        if(!message.member.voiceChannel){
            message.reply("You are not in a voice channel!")
            return;
        }
        if(!ytdl.validateURL(args[1])){
            message.reply("You can only provide youtube links!")
            return;
        }
        if(!servers[message.guild.id])
        {
            servers[message.guild.id]={queue:[]}
        }
        var server = servers[message.guild.id]
        server.queue.push(queue);

        play(connection, message)

    }
}