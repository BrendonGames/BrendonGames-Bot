const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("h");
})

// Webpage
app.get("/", (req, res) => {
  res.send("Prefix: h<br><br>List of commands:<br>bleh<br>boobas<br>creeper<br>hogridaaa<br>info<br>kekw<br>linebreak<br>ping<br><br>autoreactions:<br>I need motivation<br>hello there<br>sucking<br>E<br>skill issue<br>Jesse...<br>");
});

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const bots = [`858043447298359347`, `1101136433349132309`]
const fs = require("fs");
const { config } = require("process");
const prefix = "h "
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for (file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`);
  client.commands.set(commandName, command);
}

const channelId = '1030104426968535060'; // Replace with the ID of the channel you want to send the message to
const dayOfWeek = 5; // 0 = Sunday, 1 = Monday, 2 = Tuesday, and so on
const hour = 16; // 24-hour format
const minute = 0;
// Thanks ChatGPT

// Set the word you want to limit
const limitedWord = /f\s*@?\s*4?\s*a?\s*r\s*t/i;

// Set the time limit in milliseconds
const timeLimit = 60000; // 1 minute

// Specify an array of user IDs to restrict
const restrictedUsers = [`658633685339209730`, `597444148559347715`, `457458285340262411`];

// Create a Map to store the last use timestamp for each user
const lastUseMap = new Map();

const hiddenText = "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _"

client.on("ready", async () => {
  
  ///Activities/status
  const activities = [
    `with ur mom :kekw:`,
    `with ${client.guilds.cache.size} servers`,
    `commands and autoreactions needed`,
    `amogus... jk... unless 👀`,
    `beating meat saber`,
    `killing fortnite kids`
  ]

  ///Status Interval
  setInterval(() => {
    const status = activities[Math.floor(Math.random() * activities.length)];
    client.user.setPresence({
      activities: [{
        name: `${status}`, type: "STREAMING",
        url: "https://www.twitch.tv/brendongames_live"
      }]
    });

  }, 15000);
})



const disable_time = 10 * 60 * 1000
let timeoutID;
let disabled_joke_channels = [];

const noDadJokes = [`1087793490462789807`, `1061577245300359199`, `1102589588809187339`]


client.on("messageCreate", message => {
  
  function enable_dadjokes() {
  
    let channelIdToRemove = message.channel.id
    
    message.channel.send("I've waited for my 10 minutes.\nIf it's getting annoying, just ping me again!")

    const index = disabled_joke_channels.indexOf(channelIdToRemove);
  
      if (index !== -1) {
        disabled_joke_channels.splice(index, 1);
      }
  
    console.log("enabled again") 
  
  }

  if(message.mentions.users.has("858043447298359347") && !message.reference && message.channel.id != "1102589588809187339") {

    if(!disabled_joke_channels.includes(message.channel.id)) {

      disabled_joke_channels.push(message.channel.id)

        message.channel.send("I've been prevented to make dad jokes for 10 minutes.\nSee you later")
        timeoutID = setTimeout(enable_dadjokes, disable_time)
        console.log("Dad jokes disabled in #" + message.channel.name + " id: " + message.channel.id)

    } else {

      let channelIdToRemove = message.channel.id
      const index = disabled_joke_channels.indexOf(channelIdToRemove);
    
        if (index !== -1) {
          disabled_joke_channels.splice(index, 1);
        }
    
        clearTimeout(timeoutID)
        message.channel.send("I've been prematurely given the ability to make dad jokes once more.\nFEAR ME MORTALS")
        console.log("enabled again, forcefully")
    }

  }

  //dad jokes :)
  const lowercaseContent = message.content.toLowerCase();
  const match = lowercaseContent.match(/i['’\s]?m\s+(.*)/i);

  if (!disabled_joke_channels.includes(message.channel.id)) {
  if (!bots.includes(message.author.id) && !noDadJokes.includes(message.channel.id) && !message.content.includes("||")) {
    if (match && !message.content.toLowerCase().includes("him")) {
      const index = match.index;
        if( message.content.includes(`'`) || message.content.includes(`’`)) {
          const substr = message.content.slice(index + match.length + 1); 
          message.channel.send("`"+`Hello`+"`"+`${substr}`+" `"+`, I'm BrendonGames bot`+"`").catch(console.error); 
         } else {
          const substr = message.content.slice(index + match.length); 
          message.channel.send("`"+`Hello`+"`"+`${substr}`+" `"+`, I'm BrendonGames bot`+"`").catch(console.error); 
         }
      }
    }
  }

  ///Command Handler
  if (message.content.startsWith(prefix)) {
    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift();
    const command = client.commands.get(commandName);
    if (!command) return;
    command.run(client, message, args);
    message.delete(1000).catch(console.error);
  }

  //sorry for your loss l lI ll l_
  if (message.content.toLowerCase().includes("loss")) {
    
    const loss = [
      "𓁲 𓁆 𓀻\n𓁇 𓁅 𓀣 𓀿",
      "I snap! it" + hiddenText +"https://i.redd.it/gelqgf1f04qa1.jpg",
      "Having autism is your loss, I'm sorry" + hiddenText + "https://preview.redd.it/n3fjq6s30lpa1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=4b67e1cf024f0c3c81a5491a29418896ce1f9507",
      "NEW MINECRAFT PAINTING JUST DROPPED!!!" + hiddenText + "https://preview.redd.it/0jsjjn7eypoa1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=d0018906f04719cc628f941c97a651bfa67f31d2",
      "ok boomer!" + hiddenText + "https://preview.redd.it/5vtszwon8vna1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fc4b56dd06216068e86c7451ee46fdf219d48f5d",
      "it's a tiny boi!\n~~:.|:;~~",
      "was it all a dream😭😭😭" + hiddenText + "https://preview.redd.it/3n2nmomtfina1.jpg?width=319&format=pjpg&auto=webp&v=enabled&s=9e43359f0cc38bf7f029ba7429dc0d8baec0dff7",
      "I think you losst your game" + hiddenText + "https://i.redd.it/emro9duw78na1.jpg",
      "JOJO's first loss" + hiddenText + "https://preview.redd.it/x8eoy0vk1zla1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=b6544c19080ae5305d36e624108ee98aecd4b868",
      "UGH, hate when it happens" + hiddenText + "https://i.redd.it/5vw0bgj0rela1.jpg",
      `( ͡° ͜ʖ ͡°) I'm at a loss on why there's so much "dust"` + hiddenText + "https://external-preview.redd.it/0XKgVq3sAVXx2Mgdt-0NlsfDlQTl7bU9IE6ue_gTtFY.jpg?width=640&crop=smart&auto=webp&v=enabled&s=613e20c2303067b732a1662bcd6690e2cf3d4a3c",
      "it's a loss for the anime that he's gone" + hiddenText + "https://preview.redd.it/345ac1o90cja1.png?width=640&crop=smart&auto=webp&v=enabled&s=b6191fd5df437d1e71c10e131b61591c0791758f",
      "HOLY SH- I'M ABOUT TO BEAT SANS" + hiddenText + "https://preview.redd.it/v94hioc60eja1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=2821a86fceacd67e12e428e03b6fce58a8370706",
      "you can't spell LOVE without LO(SS)" + hiddenText + "https://i.redd.it/91exjnz2q0ha1.png",
      "Patrick's losst brother" + hiddenText + "https://preview.redd.it/7pmqj9g69qea1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=036c27537cd7975bb7d2a6961f9434ca146d63e7",
    ]

    let randomNumber = Math.random()
    let lossNumber = Math.floor(Math.random() * ((loss.length - 1) - 0 + 1)) + 0
    let whichLoss = loss.at(lossNumber)

    console.log(lossNumber)
    console.log(randomNumber)
    
    if (randomNumber <= 0.2) {
      
      if (message.author.id == "597444148559347715") {
        
        message.channel.send(loss.at(2)).catch(console.error)
        
      } else {

        if (message.author.id !== "858043447298359347") {
        
      message.channel.send(whichLoss).catch(console.error)
          
        }
      }
    }
  }

  //second info command
  /*if(message.content.toLowerCase.startsWith("h info")) {
    const date = message.author.createdAt;
  const newDate = date.toLocaleDateString();

  const joinDate = message.member.joinedAt;
  const newJoinDate = joinDate.toLocaleDateString();
    
  
  let embed = new Discord.MessageEmbed()
    .color("RANDOM")

    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    
    .setTitle(`Info about ${message.author.username}`)
    
    .setURL(message.author.displayAvatarURL({dynamic: true}))
    
    .setDescription(`Here's some info about ${message.author.username}:D\n(This command is still a work in progress)`)
    
    .addField("Account creation date", `${newDate}`, true)
    
    .addField("Joined server", `${newJoinDate}`, true)
    
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    
    .setFooter(client.user.username, client.user.displayAvatarURL({dynamic: true}))
    
    .setImage(message.author.displayAvatarURL({dynamic: true}))
    
    .setTimestamp()

  message.channel.send({ embeds : [embed] })
  
  }*/

  ///no cursing
  /*if (message.content.toLowerCase().includes("french") || message.content.toLowerCase().includes("france") || message.content.toLowerCase().includes("frans") || message.content.toLowerCase().includes("frankrijk") || message.content.toLowerCase().includes("français")) {
    message.channel.send(`${message.author.toString()} just said a bad word`);
    message.reply(`NO CURSING >:(`).catch(console.error)
      .then(msg => {
        setTimeout(() => msg.delete().catch(console.error), 10000)
      })
      .catch
    setTimeout(() => {
      message.delete(1000).catch(console.error);
    }, 10000)
  }*/


  //what?
  if (message.content.toLowerCase() == "what" || message.content.toLowerCase() == "what?") {
    message.channel.send("https://cdn.discordapp.com/attachments/930750934387163138/1102587415874519170/IMG_3616.png")
  }

  //kys
  if (message.content.toLowerCase().startsWith("kys")) {
  message.channel.send("https://tenor.com/view/kys-keep-yourself-safe-low-tier-god-gif-24664025")
  }

  //komt goed
  if (message.content.toLowerCase().includes("komt goed")) {
    message.channel.send("https://cdn.discordapp.com/attachments/645567404428099585/1089835527676625057/611163E7-22BE-4FEC-8562-4BFEC0302A38.jpg")
    }


  //motivation
  if (message.content.toLowerCase() === "i need motivation") {
    if (message.author.id === "935931725194870804"  || message.author.id == "457458285340262411" || message.author.id === "887721851663560724" || message.author.id === "511241258065330200" || message.author.id === "580419287487873024" || message.author.id === "551078071353212933" || message.author.id === "689181843962069116") {

      let number = Math.random();

      console.log(number)

      if (number < 0.5) {
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`Here ya go :D`)
          .setImage("https://cdn.discordapp.com/attachments/939320604027416576/984418670837116968/B4E15A9A-6F80-45D8-8D55-7067683BEAF3.gif")
          .setTimestamp()
        message.channel.send({ embeds: [embed] })

      } else {
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`You expected motivation, but it was me Dio >:D`)
          .setImage("https://cdn.discordapp.com/attachments/803277921929396235/985655892890517554/EADD56F0-50B3-4FEC-B9F2-BB37A77BD69A.gif")
          .setTimestamp()
        message.channel.send({ embeds: [embed] })
      }
    } else { 
      let number2 = Math.random();

      console.log(number2)

      if (number2 < 0.5) {
        let embed = new Discord.MessageEmbed()
          .setTitle("Here's your motivation :D")
          .setColor("RANDOM")
          .setImage("https://cdn.discordapp.com/attachments/803277921929396235/1065343307753996338/image.jpg")

        message.channel.send({ embeds: [embed] })
        
        console.log("motivation send n2: " + number2);
      } else { 
          let embed = new Discord.MessageEmbed()
            .setTitle("Here's your motivation >:D")
            .setColor("RANDOM")
            .setImage("https://cdn.discordapp.com/attachments/803277921929396235/1065302439244349450/E_HXiZqX0Ac2UyZ.png")
            
        message.channel.send({ embeds: [embed] })
        
        console.log("*motivation* send n2: " + number2);
      }
    }
  }

  ///No Horny
  if (message.channel.id === "1102699108420038706") {
    if (message.content.toLowerCase().includes("smash")) {
    let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(message.author.username + " that's not appropriate here, go to horny jail >:(")
          .setImage("https://cdn.discordapp.com/attachments/803277921929396235/1069686518903480450/download.jpg")
          .setTimestamp()
        message.channel.send({ embeds: [embed] })
    }
  }
  
  ///General Kenobi
  if (message.content.toLowerCase() === "hello there") {
    message.channel.send("General Kenobi");
    console.log("hello there send");
  }

  ///MR. White
  if (message.content.toLowerCase().startsWith("jesse")) {
    message.channel.send("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⠿⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿ \n⣿⣿⡏⠁⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣶⣶⣦⣤⡄⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿ \n⣿⣿⣷⣄⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡧⠇⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣾⣮⣭⣿⡻⣽⣒⠀⣤⣜⣭⠐⢐⣒⠢⢰⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⡟⣾⣿⠂⢈⢿⣷⣞⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣷⣶⣾⡿⠿⣿⠗⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠋⠉⠑⠀⠀⢘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⣿⡿⠟⢹⣿⣿⡇⢀⣶⣶⠴⠶⠀⠀⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿⣿⠀⠀⠣⠀⠀⠀⠀⠀⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠹⣿⣧⣀⠀⠀⠀⠀⡀⣴⠁⢘⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿ \n⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠗⠂⠄⠀⣴⡟⠀⠀⡃⠀⠉⠉⠟⡿⣿⣿⣿⣿ ⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠾⠛⠂⢹⠀⠀⠀⢡⠀⠀⠀⠀⠀⠙⠛⠿⢿")
  }

  ///Sucking PP
  if (message.content.toLowerCase() === "sucking") {
    message.channel.send("dick");
    console.log("PP verzonden");
  }

  //branden
  if (message.content.toLowerCase().includes("branden")) {
    message.react("🔥").catch(console.error)
  }
  
  ///No E
  if (message.content === "E") {
    message.channel.send("ß is the new E 🗿");
    message.channel.send("https://cdn.discordapp.com/attachments/803277921929396235/930554562727788634/rlxqhdr3r8981.jpg");
    console.log("ß send");
  }

  ///Skill Issue
  if (message.content.toLowerCase() === "skill issue" || message.content.toLowerCase() === "skill tissue" || message.content.toLowerCase() == "скилл ищю") {
    message.channel.send(`${client.emojis.cache.get("946149477281071134")}`);
    if (message.author.id === "858043447298359347") {
      message.channel.send("He's right")
    }
  }

  /// throwaway jokes

  ///no studying
  if (message.content.toLowerCase() === "maja oké mensen luister, leren is belangrijk dus bek dicht en verder gaan") {
    const KarlsonVibe = client.emojis.cache.get("943202380068061204");
    message.react(`${KarlsonVibe}`);
    console.log("Get Karlsonvibed");
  }

  ///No OWO
  if (message.content.toLowerCase() === "lmao") {
    if (message.author.id === "289066747443675143") {
      message.channel.send(`shut up ${message.author.toString()}`);
      console.log("silence OWO")
    }
  }

  ///no sleeping
  if (message.content.toLowerCase().includes("wait, you're actually going to sleep")) {
    if (message.author.id === "155149108183695360") {
      message.reply("No of course not").catch(console.error)
      console.log("no sleeping")
    }
  }

  //No growling or clash royale references
  /*if (message.content.toLowerCase().includes("g") && message.content.toLowerCase().includes("rrr")) {

    message.channel.send(`${message.author.toString()} stop growling or doing the clash royale angry sound >:(` );
    message.delete(1000).catch(console.error);
    
  }*/
  
  //no f@rt
  // Check if the message was sent by a restricted user and contains the limited word
  if (restrictedUsers.includes(message.author.id) && limitedWord.test(message.content)) {
    // Check the last time the user used the limited word and whether the bot has sent a warning message
    const userLastUse = lastUseMap.get(message.author.id) || {lastUse: 0, warned: false};
    const now = Date.now();
    const timeSinceLastUse = now - userLastUse.lastUse;
    if (timeSinceLastUse < timeLimit) {

      message.delete(1000);
      
      // Calculate the remaining time before the user can use the word again
      const remainingTime = timeLimit - timeSinceLastUse;
      const remainingSeconds = Math.round(remainingTime / 1000);
      if (!userLastUse.warned) {
          // Send a private message to the user with a warning and the remaining time
          message.author.send(`You are not allowed to use the word "fart" more than once per minute. Please wait ${remainingSeconds} seconds before using it again.`);
        // Update the user's warning status
        lastUseMap.set(message.author.id, {lastUse: userLastUse.lastUse, warned: true});
      }
    } else {
      // Update the last use timestamp and reset the user's warning status
      lastUseMap.set(message.author.id, {lastUse: now, warned: false});
    }
  }

  //I can do anything
  if (message.content.includes("anything") && message.author.id == "658633685339209730") {
  message.channel.send("https://tenor.com/view/dancing-deltarune-jevil-happy-gif-12933888")
}



  
//h-bot///////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content === "h") {
      if (message.author.id === `935931725194870804` || message.author.id === `457458285340262411`) {
    const h = client.emojis.cache.get("945306994821201981");
    message.react(h).catch(console.error);
    message.react(`🇪`).catch(console.error);
    message.react(`🇳`).catch(console.error);
    message.react(`🇹`).catch(console.error);
    message.react(`🇦`).catch(console.error);
    message.react(`🇮`).catch(console.error);
    message.react(`👍`).catch(console.error);
    console.log(`hentai 👍`);
  }
        else { if (message.author.id === "580419287487873024") {
          const h = client.emojis.cache.get("945306994821201981");
          message.react(h).catch(console.error);
          message.react(`🇴`).catch(console.error);
          message.react(`🇳`).catch(console.error);
          message.react(`🇰`).catch(console.error);
          message.react(`🎷`).catch(console.error);
          console.log(`HONK`);
        }
  else {
    const h = client.emojis.cache.get("945306994821201981");
    message.react(`${h}`).catch(console.error);
    console.log("h reacted");
  }
  }
}
 
  if (message.content === "H") {
     const hmad = client.emojis.cache.get("949270089931304960");
    message.reply("*h").catch(console.error);
    message.channel.send(`${hmad}`);
    }

  if (message.content.toLowerCase() === "skill issue") {
  const guildid = message.guild.id
  if (guildid === "913902828970451015" || guildid === "668184554762272828") {
  return;
  } else {
    message.channel.send(`${client.emojis.cache.get("946149477281071134")}`);
    }
  }

  if (message.content.toLowerCase() === "kekw") {
    if (message.author.id === "457458285340262411") {
    message.delete(1000).catch(console.error);
    message.channel.send(`${client.emojis.cache.get("946149477281071134")}`);
      }
      return;
    }
  return;

})
//h-bot///////////////////////////////////////////////////////////////////////////////////////////////

//snipe
client.on('messageDelete', async (message) => {

  let sendTo = client.channels.cache.get('1102589588809187339')
  let ChannelMessage = message.channel
  let snipe_message_author = `${message.author.username}#${message.author.discriminator}`
  let snipe_message_content = message.content
  
    if (snipe_message_content) {
      sendTo.send(`Newly deleted message:\n\n> User:\n${snipe_message_author}\n> In:\n${ChannelMessage}\n> Deleted message:\n${snipe_message_content}` );
    }
});


// Dalton uur inplannen
// Set interval to check the time every minute
  setInterval(() => {
    const now = new Date();
    const currentDayOfWeek = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Check if it's the specified day of the week and time
    if (currentDayOfWeek === dayOfWeek && currentHour === hour && currentMinute === minute) {
      let channel = client.channels.cache.get(channelId);
      channel.send('<@&1088027946477957190> vergeet je daltonuren niet');
    }
  }, 60000); // 1 minute in milliseconds



  let loginConfig;
  if (fs.existsSync('./config.json')) {
    loginConfig = require('./config.json')
  }

  const token = loginConfig?.token || process.env.token;

client.login(token)