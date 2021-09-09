/*CMD
  command: Pending
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
Bot.sendMessage("*⚠️ Not Joined)
var buttons = [
    {title: "Join our group", url: "https://t.me/polymate_nftchat"},
    {title: "✅ Joinee", command: "main_menu" }
];
Bot.sendInlineKeyboard(buttons, "*🚫 Not Joined our group🚧 \n\n❌ Must Join*");;
