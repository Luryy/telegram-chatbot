const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const opt = {polling: true};
const bot = new TelegramBot(token, opt);

const bots = {

    lupi: require('./bot-lupi.js'),
    config: require('./bot-config.js'),
    geral: require('./bot-geral.js'),
    lupiMail: require('./bot-lupiMail.js'),
  
  }
  
  
  
  module.exports = function (){
  
    bots.lupi(bot);
    bots.config(bot);
    bots.geral(bot);
    bots.lupiMail(bot);
  
  }
  
  
  
  