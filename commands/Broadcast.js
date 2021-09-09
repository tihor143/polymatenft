/*CMD
  command: Broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Your Message For Broadcast*

  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == 943068058){
Bot.runAll({ 
command: "Broadcast1",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*🚀 Message Sended To All Users*")
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
