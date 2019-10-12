const ytdl = require('ytdl-core');
async function play(connection,message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(server.queue[0], {filter: "audioonly"});
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if (server.queue[0]) play(connection,message)
        else connection.disconnect();
    });
}
module.exports = class cchanneltext{
    constructor(){
        this.name = "cchanneltext",
        this.alias = ["cchanneltext"],
        this.usage = ".cchanneltext name"
    }
    async run(bot, message, args)
    {
       var servers ={}; 
  
        if(!args[1]){
            message.reply("You didn't give a link!")
            return;
        }
        if(!message.member.voiceChannel){
            message.reply("You are not in a voice channel!")
        }
        if(!args[1].startsWith("www.youtube.com"|| "yotu.be")){
            message.reply("You can only provide youtube links!")
        }
        if(!servers[message.guild.id])servers[message.guild.id] ={
            queue: []
        }
        var server = servers[message.guild.id];
        server.queue.push(args[1])
        
        if(!message.guild.voiceConnection)message.member.voiceChannel.join().then(function(connection){
            play(connection, message)
        });
    }
}