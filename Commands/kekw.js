module.exports.run = (client, message, args) => {
    message.delete(1000).catch(console.error);
    const trollKek = client.emojis.cache.get("946149477281071134");
    message.channel.send(`${client.emojis.cache.get("946149477281071134")}`);
    console.log(`hahaha funny`)
  }