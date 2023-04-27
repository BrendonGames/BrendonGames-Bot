module.exports.run = (client, message, args) => {
  
const Discord = require("discord.js");
  
  const date = message.author.createdAt;
  const newDate = date.toLocaleDateString();

  const joinDate = message.member.joinedAt;
  const newJoinDate = joinDate.toLocaleDateString();
    
  
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    
    .setTitle(`Info about ${message.author.username}`)
    
    .setURL(message.author.displayAvatarURL({dynamic: true}))
    
    .setDescription("Here's some info about you :D\n(This command is still a work in progress)")
    
    .addField("Account creation date", `${newDate}`, true)
    
    .addField("Joined server", `${newJoinDate}`, true)
    
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    
    .setFooter(client.user.username, client.user.displayAvatarURL({dynamic: true}))
    
    .setImage(message.author.displayAvatarURL({dynamic: true}))
    
    .setTimestamp()

  message.channel.send({ embeds : [embed] })
  
 }