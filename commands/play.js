const ytdl = require('ytdl-core');

var servers ={}; 

module.exports = class play{
    constructor(){
        this.name = ".play",
        this.alias = ["play"],
        this.usage = ".play link"
    }
    async run(bot, message, args)
    {
            function play(guild, song) {
                const serverQueue = queue.get(guild.id);

                if (!song) {
                    serverQueue.voiceChannel.leave();
                    queue.delete(guild.id);
                    return;
                }

                const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                    .on('end', () => {
                        console.log('Music ended!');
                        serverQueue.songs.shift();
                        play(guild, serverQueue.songs[0]);
                    })
                    .on('error', error => {
                        console.error(error);
                    });
            }
        let findDJ =message.member.roles.find(value => value.name == "DJ")
        if (!findDJ){
            message.reply("You dont have DJ role!");
          return;
        }
        if(!args[1]){
            message.reply("You didn't give a link!")
            return;
        }
        
        if(!ytdl.validateURL(args[1])){
            message.reply("You can only provide youtube links!")
            return;
        }
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
                    message.reply(`Now playing ${args[1]}`)
                    server.queue.push(args[1]);

                    play(connection, message)
                })

            }
        }
        else
            {
                message.reply("Your not in a Voice Channel!");
            }
    }
       
        
        

        
        
        

    }
