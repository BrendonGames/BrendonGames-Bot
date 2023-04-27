module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  
  if(message.author.id === "457458285340262411" || message.author.id === "597444148559347715" || message.author.id === "557223151671574569" || message.author.id === "667819866589233186" || message.author.id === "924248666426970112" || message.author.id === "935931725194870804") {

let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
	.setTitle('Some title')
	
  .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	
  .setAuthor({ name: 'Some name', iconURL: `${message.author.displayAvatarURL({dynamic: true})}`, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })
	
  .setDescription('Some description here')
	
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
	
  .addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	
  .addField('Inline field title', 'Some value here', true)
	
  .setImage(message.guild.iconURL({dynamic: true}))
	
  .setTimestamp()
	
  .setFooter({ text: 'Some footer text here', iconURL: `${message.guild.iconURL({dynamic: true})}` });

    
  message.channel.send({ embeds : [embed] })







    
    
    

console.log("tested")}
/// no testing
else message.channel.send("no testing for you >:)") || console.log("no testing >:(")
  } 