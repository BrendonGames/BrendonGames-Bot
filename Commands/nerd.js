module.exports.run = (client, message, args) => {
  message.delete(1000).catch(console.error);

  const trollKek = client.emojis.cache.get("946149477281071134")
  const Discord = require("discord.js");
  
   let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Visual representation of you right now ${client.emojis.cache.get("946149477281071134")}`)
    .setFooter(`${message.author.tag} called you a nerd`, message.author.displayAvatarURL({dynamic: true}))
    .setImage("https://media.discordapp.net/stickers/932676225170829372.webp?size=160")
    .setTimestamp()
  
message.channel.send({ embeds : [embed] })
  
  console.log("why you being nerdy?")
  }