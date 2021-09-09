/*CMD
  command: captcha
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var t = Libs.ResourcesLib.anotherChatRes("timm","global")
let A = t.value()
var n = Libs.Random.randomInt(1,A)
var ph =
Bot.getProperty("Pic"+n)
var cp =
Bot.getProperty("Cap"+n)
Api.sendPhoto({photo: ph, caption: "♻️Solve The Captcha"})
User.setProperty("Answer",cp,"string")
Bot.runCommand("Verify108")
