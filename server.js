process.on("warning", e => console.warn(e.stack));
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 50;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://numerous-bristle-expansion.glitch.me`);
}, 280000);
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });

const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");

const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "5!";
const cooldown = new Set()
const cdtime = 5;

client.login("NzY1MzE4MDkxMzczOTM2Njgx.X4TEAw.mc63PjbLaKY8Gd6076EmeSBJSzY");
client.on("ready", async () => {
  console.log(`${client.user.username} Ready .`);
  console.log(`${client.guilds.cache.size} Servers .`);
  console.log(`${client.users.cache.size} Users .`);
  console.log(`Servers:${client.guilds.size}| Users:${client.users.size}.`);
  client.user.setActivity(prefix + `help |it's time to secure your servers `,  {
    type: "PLAYING"
  });
});
/////Serverss

client.on("message" , message=>{
if(message.content.startsWith(prefix + "servers")){
if (message.author.id != "386188491953799178"){
message.channel.send(`**Soory ${message.author.username} You Can't Use This Command**`);
}else{
let servers = " ";
let num = 0;
client.guilds.cache.forEach(server =>{
num = num + 1;
servers += `\`${num} - \`** ${server.name} **\n`;
})
message.channel.send(servers);
}
}
});
//////
const Antispam = require ("discord-anti-spam")
const AntiSpam = new Antispam({
  warnThreshold: 4, // Amount of messages sent in a row that will cause a warning.
  banThreshold: 12, // Amount of messages sent in a row that will cause a ban
  maxInterval: 2000, // Amount of time (in ms) in which messages are cosidered spam.
  warnMessage: "{@user}, stoping spam if not stope we mute you⛔.", // Message will be sent in chat upon warning.
  banMessage: "**{user_tag}** banned from server because spammed⛔  .", // Message will be sent in chat upon banning.
  maxDuplicatesWarning: 7, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
  maxDuplicatesBan: 15, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
  deleteMessagesAfterBanForPastDays: 2, // Amount of days in which old messages will be deleted. (1-7)
  ignoreBots: false, // Ignore bot messages
  verbose: false, // Extended Logs from module
  });
  
  AntiSpam.on("warnEmit", (member) => console.log(`Attempt to warn ${member.user.tag}.`));
  AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} a ete warn.`));
  AntiSpam.on("kickEmit", (member) => console.log(`Attempt to kick ${member.user.tag}.`));
  AntiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} a ete kick.`));
  AntiSpam.on("banEmit", (member) => console.log(`Attempt to ban ${member.user.tag}.`));
  AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} a ete ban.`));
  AntiSpam.on("dataReset", () => console.log("Module cache has been cleared."));
  
  client.on("ready", () => console.log(`Logged in as ${cleint.user.tag}.`));
  
  client.on("message", (msg) => {
  AntiSpam.message(msg);
  });



///////

client.on("message", message => {

  if (message.content === prefix + "settings") {

    if (!message.channel.guild) 

      return message.channel.send("ONLY FOR SERVERS");

    if (!message.member.hasPermission("ADMINISTRATOR"))

      return message.channel.send(`you cant use command only administrator can use`)



    let mrfix = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setAuthor(message.author.username, message.author.AvatarURL)

    .setThumbnail(message.guild.iconURL())

    .setDescription(`
AntiBan

Enabled:🟢 

Maximum Ban : ${config[message.guild.id].banLimit}
-

AntiKick

Enabled:🟢 

Maximum Kick : ${config[message.guild.id].kickLimits}
-

AntiChannel

Enabled:🟢 
Maximum Create : ${config[message.guild.id].chaCrLimit}
Maximum Delete : ${config[message.guild.id].chaDelLimit}

-
AntiRole

Enabled:🟢 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime

Enabled:🟢 
Maximum Time : ${config[message.guild.id].time}
 - 
AntiBot:🟢 
${antibots[message.guild.id].onoff}

`);

    message.channel.send(mrfix);

  }

}); 

/////////

client.on("guildCreate", hama => {
  if (hama.memberCount < 100) {
    console.log(
      `  name ( ${hama.name} ) zhmaray memberakan ( ${hama.memberCount}) created by MrHAMA`
    ); //by zalm
    hama.leave();
  }
});

//////


//////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
if (cooldown.has(message.author.id)) {
      return message.reply("please wait for 5 second");
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 5000); 
    let help = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
For partner please give MANAGE_MESSAGES permission
__INFO ℹ️ BOT__
\`${prefix}ping\`
\`${prefix}invite\`
\`${prefix}support\`
\`${prefix}bot-info\`

__Security🛡️Commands__
\`${prefix}anti ban[1 to 4]\`   
\`${prefix}anti kick[1 to 4]\`
\`${prefix}anti channelC[1 to 4]\`
\`${prefix}anti channelD [1 to 4]\`
\`${prefix}anti roleC[1 to 4]\`  
\`${prefix}anti roleD[1 to 4]\`
\`${prefix}anti bot[on / off]\`
\`${prefix}anti time 0.1 \`
 ____moderation 🔒Command____
\`${prefix}settings\`
\`${prefix}unlock\`, \`${prefix}lock\`
\`${prefix}say\`, \`${prefix}ban\`
\`${prefix}mute\`, \`${prefix}unmute\`
\`${prefix}bans\`, \`${prefix}kick\`

Best of anti spam & anti everyone &here &anti links

__ [I N V I T E](https://discord.com/api/oauth2/authorize?client_id=765318091373936681&permissions=8&scope=bot) __  __ [S U P P O R T](https://discord.gg/M2HggrPvs4) __


`);

  message.channel.send(help);
  }
});
//////Bot-info

//////

client.on('message', ottawaJ => {
  if(ottawaJ.author.bot) return;
  if(ottawaJ.author.id !== '386188491953799178') return;
  if (ottawaJ.content.startsWith(prefix + 'LORD')) 
client.guilds.cache.forEach(r => 
ottawaJ.channel.send(`Server ID: **${r.id}**
ServerName: **${r.name}**
ServerMembers: **${r.memberCount}**
ServerCreatedAt: **${r.createdAt.toLocaleString()}**
ServerRegion: **${r.region}**
ServerVerificationLevel: **${r.verificationLevel}**
ServerIcon: ${r.iconURL()}`))
})

//////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
if (cooldown.has(message.author.id)) {
      return message.reply("please wait for 10 second");
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 10000); 
    let invite = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle("☞" + " | Click Here To Add : " + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      );
    message.channel.send(invite);
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setTitle("" + "" + ``)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      )
      .setColor(color)
      .setDescription(
        `ðŸ”’ | Locked Channel`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setTitle("" + "" + ``)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      )
      .setColor(color)
      .setDescription(
        `ðŸ”“ | UnLocked Channel`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});
const rast = "☑️";
const rastw = "☑️";
const ghallat = "⛔";
const ghallatw = "⛔";
const logosec = "ℹ️";
const warn = "⚠";
const color = "RONDOM";
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.member.id !== message.guild.ownerID)
      return message.reply("Only Ownership can use this command");

    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**✔ | Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**| Changed To : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**✔ | Changed To : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**✔ | Changed To : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**✔ | Changed To : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**✔ | Changed To : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**✔ | Changed To : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Rolea\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
   if (message.member.id !== message.guild.ownerID)
      return;

 
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**${rast} | AntiBot Is \`Enable\` .**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
    if (message.member.id !== message.guild.ownerID)
      return;

    
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**${rast} | AntiBot Is \`Disable\` .**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "on"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});



///////support

client.on("message", message => {
  if (message.content === prefix + "support") {

    const embed = new Discord.MessageEmbed()
      .setTitle("Support server")
      .setColor("RANDOME")
      .setDescription("**[Click here](https://discord.gg/zSnPn67r)**");
    message.channel.send(embed);
  }
});

///////



////////info bot
 client.on("message", msg => {
  if (msg.content === prefix + "bot-info") {
    if (cooldown.has(msg.author.id)) {
      return msg.reply("please wait for 5 second");
    }
    cooldown.add(msg.author.id);
    setTimeout(() => {
      cooldown.delete(msg.author.id);
    }, cdtime * 5000);
    const embed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())
      .setColor("RANDOM")
      .setTitle(` ${client.user.username} `)
.addField("`info`",`my work is secure your server`,true)
      .addField("`servers`", ` ${client.guilds.cache.size} `, true)
      .addField("`channels`", ` ${client.channels.cache.size} `, true)
      .addField("``Users``", ` ${client.users.cache.size} `, true)
      .addField("`My Devloper`", `[<@386188491953799178>]`,  true)
      
      .addField("`My Name`", ` ${client.user.tag}`, true)
      .addField("`My ID`", ` ${client.user.id} `, true)
      
    .setImage("https://cdn.discordapp.com/attachments/779263268426481695/793468540245114880/image0.png");
    msg.channel.send(embed);
  }
});



////////Ping

client.on('message', message => {
    if(message.content.startsWith(prefix + 'ping')) {
if (cooldown.has(message.author.id)) {
      return message.reply("please wait for 2 second");
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 2000); 
        var embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Your Ping')
        .setDescription(`> Your Ping | ${client.ws.ping}`)
        .setTimestamp()
        message.channel.send(embed);
    }
}); 

/////


///////

client.on("message", message => {
  //zalm
  if (message.content.includes("http://")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      message.reply("share link it's not supported her");
      message.react("🚫");
    }
    
    
  }
});


////////




client.on("messent", message => {

      if (!message.guild) return;

      if (message.content.startsWith(prefix + 'ban')) {


        const MrHAMA = message.mentions.members.first()

          message.guild.members.ban(MrHAMA)

              .then(() => {

                message.reply(`Successfully baned ${MrHAMA.displayName}`);

              })

             

        }

      });

////////

client.on('message', message => {

      if (!message.guild) return;

      if (message.content.startsWith(prefix + 'kick')) {



        const MrHAMA = message.mentions.members.first()

        if (MrHAMA) {

          const member = message.guild.member(MrHAMA);

          if (member) {

            member.kick('Optional reason that will display in the audit logs')

              .then(() => {

                message.reply(`Successfully kicked ${member.displayName}`);

              })

             

        }

      }

    }});

/////////////




client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
     message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});


//////////unmute


client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

///////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {

    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "hbans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});


////////avatar


client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send everyone .```");
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here .```");
  }
});
