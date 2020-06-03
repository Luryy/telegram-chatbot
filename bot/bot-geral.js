module.exports = function(bot)
{
    bot.on('message', (msg, match) => {
        
        const chatId = msg.chat.id;
        const resp = msg.text;

        if (/ei* matilha/.test(msg.text.toString().toLowerCase())) {
            bot.sendMessage(chatId, 'Auuuuuuuuu');
            }

        if (resp.toString().toLowerCase().includes(('pq' || 'por que') && ('vc' || 'você') && ('ta' || 'tá' || 'veio') && ('telegram'))) {
            bot.sendMessage(chatId, `Pq estou morrendo de saudade de todo mundo na sede e também de uma aglomeração rsrsrrs`);
           }

        if (resp.toString().toLowerCase().includes('saudades')) {
            bot.sendMessage(chatId, `Também estou morrendo de saudade ${msg.from.first_name}, mas por enquanto só podemos nós falar por aqui`);
           }

        if (resp.toString().toLowerCase().includes('vamos' && 'fazer' && 'chamada' && ( 'vídeo' || 'video'))) {
         bot.sendMessage(chatId, `Infelizmente ainda não sei usar essa tecnologia, quem sabe em breve rsrsrs`);
        }

    
      }); 
}