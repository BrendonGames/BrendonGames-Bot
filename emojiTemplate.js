module.exports.run = (client, message, args) => {
  const ... = client.emojis.cache.get("");
  message.channel.send(`${...}`)
  console.log("... send")
}