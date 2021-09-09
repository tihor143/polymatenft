/*CMD
  command: Findbalnce1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send user id


  ANSWER
  keyboard: 
  aliases: 
CMD*/

var admim = user.telegramid
if (admim == ("943068058")) {
  var id = message
  var user_bal = Libs.ResourcesLib.anotherUserRes("money", id)
  Bot.sendMessage("Users balance : " + user_bal.value().toFixed(8))
} else {
  Bot.sendMessage("Your are not admin")
}
