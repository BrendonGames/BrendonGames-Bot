module.exports.run = (client, message, args) => {
  message.delete(1000).catch(console.error);
  const boobas = client.emojis.cache.get("942444059946004530");
  message.channel.send(`${boobas}`);
  console.log("booba send");
}