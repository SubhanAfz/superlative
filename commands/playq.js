const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAikRgC_rsPcw_GiksPZET2A3ifiGvW8uY") 





var servers ={}; 

module.exports = class play{
    constructor(){
        this.name = ".playq",
        this.alias = ["playq"],
        this.usage = ".play query"
    }
    async run(bot, message, args,colours)
    {
        

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
                
        };
        let findDJ =message.member.roles.find(value => value.name == "DJ")
        if (!findDJ){
            message.reply("You dont have DJ role!");
          return;
        }
        if(!args[1]){
            message.reply("You didn't give a query!")
            return;
        }
        youtube.searchVideos(args[1], 1).then(results => {
            var ytlinkstring = results[0].url

            
            if (message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {   
                message.guild.voiceConnection.disconnect();
            }
            else
            {
                if(!servers[message.guild.id]){
                    servers[message.guild.id]={queue:[]}
                }
                var server = servers[message.guild.id]
                message.member.voiceChannel.join()
                .then(connection=>{

                    message.reply(`Now playing ${ytlinkstring}`)
                    server.queue.push(ytlinkstring);

                    play(connection, message)
                })

            }
        }
        else
            {
                message.reply("Your not in a Voice Channel!");
            }
            
        }).catch(console.error)
        

        




    }
       
        
        

        
        
        

}
