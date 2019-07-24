const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('shady', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : shady ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`fortnite`,"http://twitch.tv/shady")
client.user.setStatus("dnd")
});

client.login("NDA0MjkyMzk1MzEyODczNDcz.XRy_hg._XMnb-nvjFsYh_btG7OqsdqziHM");// لا تغير فيها شيء