const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

var meta = 0 

module.exports = function()
{
 
  // replace the value below with the Telegram token you receive from @BotFather
  const token = '1133636994:AAGJGLttrcovXNohWZXo_NFKnjdkVjvx2mQ';

  const opt = {polling: true};

  // Create a bot that uses 'polling' to fetch new updates
  const bot = new TelegramBot(token, opt);
  
  // Matches "/echo [whatever]"
  bot.onText(/\/bot (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });

  bot.on('message', (msg) => {
    console.log(msg);
    if (msg.text.toString().toLowerCase().includes('meta')) {
      meta += 3;
      bot.sendMessage(msg.chat.id, meta);
      }

  }); 


}