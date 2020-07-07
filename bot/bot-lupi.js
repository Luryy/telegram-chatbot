const db = require('../infra/conexao');
const DataDao = require('../infra/data-dao');
const dataDao = new DataDao(db);


module.exports = function(bot)
{
  bot.onText(/\/lupi (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; 

    if (resp.toString().toLowerCase().includes('quanto' && ('faltando' || 'falta') && 'ac')) {
      dataDao.busca('meta, faturamento, projetos, metaproj')
        .then(result => bot.sendMessage(chatId, `Faltam ${((result.meta - result.faturamento)/1000).toFixed(3)}k e ${(result.metaproj - result.projetos)}P\n#Foco #200K90P`))
        .catch(erro => bot.sendMessage(chaId, erro))

      }

      if (resp.toString().toLowerCase().includes('quanto' && ('faltando' || 'falta') && ('mes' || 'mês') && 'meta')) {
        dataDao.busca('metames, fatmes, projmes, metaprojmes')
          .then(result => bot.sendMessage(chatId, `Faltam ${((result.metames - result.fatmes)/1000).toFixed(3)}k e ${(result.metaprojmes - result.projmes)}P\nBORA GALERA!!!`))
          .catch(erro => bot.sendMessage(chaId, erro))
  
        }

    if (resp.toString().toLowerCase().includes('qual o nosso faturamento')) {
      dataDao.busca('faturamento')
        .then(result => bot.sendMessage(chatId, `Nosso faturamento é ${(result.faturamento/1000).toFixed(3)}k \n#Foco #200K90P`))
        .catch(erro => bot.sendMessage(chaId, erro))

      }

    if (resp.toString().toLowerCase().includes('quantos' && 'projetos')) {
      dataDao.busca('projetos')
        .then(result => bot.sendMessage(chatId, `Já fechamos ${result.projetos}P \n#Foco #200K90P`))
        .catch(erro => bot.sendMessage(chaId, erro))
  
      }
  

    if (resp.toString().toLowerCase().includes('qual' && 'melhor' && ( 'ej' || 'empresa'))) {
      dataDao.busca('ej')
        .then(result => bot.sendMessage(chatId, `Claro que é a ${result.ej}`))
        .catch(erro => bot.sendMessage(chaId, erro))

     }

     if (resp.toString().toLowerCase().includes('ontem cedo passamos um valor errado a cerca do nosso farol verde de faturamento! você pode atualizar?')) {
      bot.sendMessage(chatId, `Oi, ${msg.from.first_name}. Claro que sim! Temos R$ 53.770,30 atualmente de faturamento e R$ 11.520,00 para bater a meta do mês proposta entre todos nós na AG.\n\n Maaas... atenção. Para estarmos no farol verde é necessário fecharmos o mês com 70k, afinal, 120k divido por 12 meses é igual a 10k por mês e, por sua vez, 10k x 7 meses é igual a 70k. Ficou claro?\n\nFoca no nosso crescimento gradativo que é sucesso! Mais tarde trago novidades sobre as nossa estratégias!`);

     }

     if (resp.toString().toLowerCase().includes('faz uma lista dos membros')) {
      bot.sendMessage(chatId, "- Ariely\n- Arthur \n- Beatriz \n- Breno\n- Damião \n- Danyelle \n- Débora \n- Geovani \n- Henrique \n- Larissa\n- Leonardo \n- Letícia A \n- Letícia B.\n- Luanna\n- Lucas Jeremias\n- Lucas Yuri\n- Marcus Antônio\n- Marcus Cezar \n- Maria Kyara\n- Marinethe \n- Mateus \n- Maylla\n- Mylena\n- Natália B.\n- Nathália R.\n- Nívea\n- Pâmala \n- Paula\n- Rafaela A.\n- Rafaela M.\n- Rodrigo \n- Samara \n- Sérgio \n- Stephani \n- Wydem\n- Yuri\n")

     }

    
  });

}