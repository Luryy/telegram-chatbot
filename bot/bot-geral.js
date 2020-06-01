module.exports = function(bot)
{
    bot.on('message', (msg, match) => {
        
        const chatId = msg.chat.id;
        const resp = msg.text;

        if (/ei* matilha/.test(msg.text.toString().toLowerCase())) {
            bot.sendMessage(chatId, 'Auuuuuuuuu');
            }

        if (resp.toString().toLowerCase().includes(('pq' || 'por que') && ('vc' || 'você') && ('ta' || 'tá' || 'veio') && ('telegram'))) {
            bot.sendMessage(chatId, `Pq estou morrendo de saudade de todo mundo na sede e também de um aglomeração rsrsrrs`);
           }
    
      }); 
}