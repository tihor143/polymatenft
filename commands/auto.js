/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("PaytmWallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 12) {
    Bot.sendMessage("_❌ Minimum Withdraw 12 CASH_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " CASH_"
      )
    } else {
      Bot.sendMessage(
        "*✅ Withdrawal Requested Successfully\nIt takes some transaction fee\n\n💳 Transaction Details = \n 💰Amount = " +
          message +
          " TRX\n💼 Wallet = " +
          wallet +
          "\n\n⏰Wait 1-12 Hour We Will Check And Pay You🎧 \n\n✅ Important❗️*\n_If You Do Fake Refer You Will Banned\n\n🌹 Payment Channel : @getmoneybottt*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@CodersTechnology",
        text:
          "*🔋 New Withdraw Requested 🏦\n\n▪️ Status = Pending\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " TRX\n▪️ User Referrals = " +
          refList.length +
          "\n\n💳 Address =\n " +
          wallet +
          "\n\n👮🏻‍♂️ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}
