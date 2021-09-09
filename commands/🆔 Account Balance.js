/*CMD
  command: 🆔 Account Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 Point : "+balance.value().toFixed(0)+" \n\n⚜️Refer And Earn More Points*")
