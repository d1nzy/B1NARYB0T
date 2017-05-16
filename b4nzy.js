'use strict';
var Eris = require("eris");
var userid = /*your id*/;
var token = "YOUR TOKEN HERE";
var pf = "b1nzy.";
let self = new Eris.CommandClient(token, {userAccount: true}, {
    description: "#bwndu",
    ignoreSelf: false,
    defaultHelpCommand: false,
    defaultCommandOptions: {
        requirements: {
            'userIDs': userid
        }
    }
});
var date = new Date();

self.on("ready", () => {
    console.log("#bwndu");
});

self.on("messageCreate", (msg) => {
    if(msg.author.id == userid) {
        if(msg.content === pf + "banne") { // b1nzy.banne
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "http://i.imgur.com/dumNNPR.png");
        } else if(msg.content === pf + "delete") { // b1nzy.delete
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "https://cdn.discordapp.com/attachments/298778712709529603/300670339694985216/unknown.png");
        } else if(msg.content === pf + "first") { // b1nzy.first
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "http://i.imgur.com/hPJxWj2.png");
        } else if(msg.content === pf + "disable") { // b1nzy.disable
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "http://i.imgur.com/bFmevd6.png");
        } else if(msg.content === pf + "mention") { // b1nzy.mention
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "http://i.imgur.com/87zPJaJ.png");
        } else if(msg.content === pf + "strikes") { // b1nzy.strikes
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "http://i.imgur.com/bbJFND9.png");
        } else if(msg.content === pf + "suspended") { // b1nzy.suspended
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "http://i.imgur.com/x6BRydZ.png");
        } else if(msg.content === pf + "p1ngzy") { // b1nzy.p1ngzy
            self.deleteMessage(msg.channel.id, msg.id);
            self.createMessage(msg.channel.id, "<@80351110224678912>");
          } else if(msg.content === pf + "info") { // b1nzy.info
            self.editMessage(msg.channel.id, msg.id, {embed: {
              author: {
                name: "b1nzy shitpost selfbot",
                icon_url: "http://i.imgur.com/5tR89go.gif",
                url: "http://takeb1nzyto.space"
              },
              description: "Commands:\n\n`b1nzy.banne`: selfbot ur banned kiddo\n`b1nzy.delete`: ill delete u kid\n`b1nzy.first`: first\n`b1nzy.disable`: if you spam mentions I'm just gonna disable messages\n`b1nzy.mention`: ima delete this server\n`b1nzy.strikes`: B1NARYTH1EF STRIKES AGAIN\n`b1nzy.suspended`: THIS SERVER HAS BEEN SUSPENDED FOR EXCESSIVE STUPID\n`b1nzy.p1ngzy`: p1ngs b1nzy",
              color: 0x7289DA,
              timestamp: new Date(),
              footer: {
                icon_url: "https://cdn.discordapp.com/avatars/193882745573867521/a_6c71d76dfcf2d7a4c6f44dedaed63370.gif",
                text: "Made in Eris by Immo"
              }
            }});
            setTimeout(function() { self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === "..die") {
            self.deleteMessage(msg.channel.id, msg.id);
            setTimeout(function() {process.exit(0);}, 500);
        }
    }
});

self.connect();
