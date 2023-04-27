module.exports.run = (client, message, args) => {
  message.delete(1000).catch(console.error);
  if(message.author.id === "457458285340262411" || message.author.id === "903728533753430057" || message.author.id === "626793210253148187" || message.author.id === "775794857205039105") {
     message.channel.send("@everyone")
    if(message.author.id === "903728533753430057") {
      message.channel.send("Diya is bored \nlmao")
      console.log("Diya bored send")
    }
    if(message.author.id === "457458285340262411") {
      message.channel.send("hahaha ping go *BRRRR*")
      console.log("Ping go BRRRR send")
    }
    if(message.author.id === "626793210253148187") {
      message.channel.send("Lil.Dyl is in the house!!!")
      console.log("Lil.Dyl send")
    }
    if(message.author.id === "775794857205039105") {
      message.channel.send("Fuck you")
      console.log("Fuck You send")
    }
  }
  else message.channel.send(`no pinging everyone for you ${message.author.toString()}`)
    console.log("no ping >:/")
}