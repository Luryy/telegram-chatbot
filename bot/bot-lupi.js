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
    const resp = match[1]; // the captured "whatever"

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

    if (resp.toString().toLowerCase().includes('qual' && 'faturamento')) {
      dataDao.busca('faturamento')
        .then(result => bot.sendMessage(chatId, `Nosso faturamento é ${(result.faturamento/1000).toFixed(3)}k \n#Foco #200K90P`))
        .catch(erro => bot.sendMessage(chaId, erro))

      }

    if (resp.toString().toLowerCase().includes('quantos' && 'projetos')) {
      dataDao.busca('projetos')
        .then(result => bot.sendMessage(chatId, `Já fechamos ${result.projetos}P \n#Foco #200K90P`))
        .catch(erro => bot.sendMessage(chaId, erro))
  
      }
  

    if (resp.toString().toLowerCase().includes('qual' && 'melhor' && ('ej' || 'empresa'))) {
      dataDao.busca('ej')
        .then(result => bot.sendMessage(chatId, `Claro que é a ${result.ej}`))
        .catch(erro => bot.sendMessage(chaId, erro))

     }

     if (resp.toString().toLowerCase().includes('eu te amo')) {
      bot.sendMessage(chatId, `Eu também te amo ${msg.from.first_name}`);

     }


    
  });

}