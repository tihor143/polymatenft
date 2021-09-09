/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your Polygon Address
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("PaytmWallet")
User.setProperty("PaytmWallet" , data.message ,"string")
Bot.sendMessage("*✅ Paytm wallet address set To :* "+data.message+"")
