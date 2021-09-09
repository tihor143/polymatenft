/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "Check ✅", command: "Check ✅" }]
Bot.sendInlineKeyboard(
  button,
  "*➡️@polymate_nft \n\n➡️@polymate_nftchat \n\nPress Check After Joining The Channel!*"
)
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0)
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*❤️ YOU REFERED SOMEONE BUT BALANCE WILL BE ADDED WHEN REFER JOINS ALL CHANNELS ❤️*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("_null_")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
status.add(1)

