/*CMD
  command: Subscribe
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Join Group", url: "https://t.me/polymate_nftchat"},
    {title: "✅ Joined", command: "main_menu" }
];
Bot.sendInlineKeyboard(buttons, "*Join our group To Proceed..*");
