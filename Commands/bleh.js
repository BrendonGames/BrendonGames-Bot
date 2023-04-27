module.exports.run = (client, message, args) => {
  message.delete(1000).catch(console.error);
  const bleh = client.emojis.cache.get("940633598229368892");
  message.channel.send(`${bleh}`);
  console.log("bleh send");
}