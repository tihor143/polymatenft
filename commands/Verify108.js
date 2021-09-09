/*CMD
  command: Verify108
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: solve captcha
  keyboard: 
  aliases: 
CMD*/

var ans =
User.getProperty("Answer")
if(data.message == ans){
Bot.sendMessage("*Verified Congrats*")
Bot.runCommand("main_menu50")
}else{
var button = [{ title : "TRY Agin" , command : "/captcha" }];
Bot.sendInlineKeyboard(button,"*Wrong code please do try again*")
Bot.runCommand("Captcha")
}
