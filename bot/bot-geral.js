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
            bot.sendMessage(chatId, `Também estou morrendo de saudade ${msg.from.first_name}, mas por enquanto só podemos nos falar por aqui`);
           }

        if (resp.toString().toLowerCase().includes('vamos' && 'fazer' && 'chamada' && ( 'vídeo' || 'video'))) {
         bot.sendMessage(chatId, `Infelizmente ainda não sei usar essa tecnologia, quem sabe em breve rsrsrs`);
        }

        if (resp.toString().toLowerCase().includes('dia parado né')) {
            bot.sendMessage(chatId, `Calma, eu estou descansando e amanhã volto com tudo, mas sempre com minha orelhinhas de lobo atentas aos leads, executando meus projetinhos e mandando o portfólio da EJEC pra todo mundo!`);
        }

        if (resp.toString().toLowerCase().includes('como faço para fazer uma boa precificação')) {
            bot.sendMessage(chatId, `Primeiramente, converse com Adm-fin para tirar todas as dúvidas em relação a planilha, além de já ter feito um bom estudo de viabilidade com a galera de projetos e de ter colhido o máximo de informações com Negócios caso o lead tenha vindo através da redes sociais ou site.\nOutra dica top, é conversar com quem já executou bastante projeto igual ao que você está precificando. Boa precificação e negociação, esse lead já deixou de ser lead desde o momento em que conversou com você. Agora ele já é cliente!`);
        }

        if (resp.toString().toLowerCase().includes('eu te amo')) {
            bot.sendMessage(chatId, `Eu também te amo ${msg.from.first_name}`);
      
           }
      
        if (resp.toString().toLowerCase().includes('fechamos projeto')) {
         bot.sendMessage(chatId, `Essa é minha empresa!!!\nSó partir pra sarrada`);
    
        }

    
      }); 
}