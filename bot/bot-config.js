const db = require('../infra/conexao');
const DataDao = require('../infra/data-dao');
const dataDao = new DataDao(db);

module.exports = function(bot)
{
    bot.onText(/\/config (.+)/, (msg, match) => {
        
        const regNumber = /\d{1,8}.\d{2}/
        const regProj = /\d{1,3}/

        const chatId = msg.chat.id;
        const resp = match[1];

        if(resp.toString().toLowerCase().includes('info')){
            bot.sendMessage(chatId,`Oi ${msg.from.first_name}, estou aprendendo agora a usar essa tecnologia, portanto, por enquanto para fazer a configuração das metas você deve seguir os passos:\n\nSempre que for alterar algum valor deverá usar inicialmente "/config"`);
            bot.sendMessage(chatId,`Para alterar o Faturamento Anual digite:\n"/config dado faturamento anual" e em seguida o valor.\n\nPara alterar a Meta de Faturamento Anual digite:\n "/config meta faturamento anual" e em seguida o valor.\n\nPara alterar o Faturamento Mensal digite:\n "/config dado faturamento mensal" e em seguida o valor.\n\nPara alterar a Meta de Faturamento Mensal digite:\n "/config meta faturamento mensal" e em seguida o valor.\n`);
            bot.sendMessage(chatId,`Para alterar o N° de Projetos Anual digite:\n "/config dado projetos anual" e em seguida o valor.\n\nPara alterar a Meta de Projetos Anual digite:\n "/config meta projetos anual" e em seguida o valor.\n\nPara alterar o N° de Projetos Mensal digite:\n "/config dado projetos mensal" e em seguida o valor.\n\nPara alterar a Meta de Projetos Mensal digite:\n "/config meta projetos mensal" e em seguida o valor.\n`);
        }

        if(resp.toString().toLowerCase().includes('dado faturamento anual')){
            var value = regNumber.exec(resp);
            
            dataDao.edita('faturamento', parseFloat(value[0]))
                .then(() => bot.sendMessage(chatId, 'Faturamento Anual Atualizado: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
            
        }

        if(resp.toString().toLowerCase().includes('meta faturamento anual')){
            var value = regNumber.exec(resp);
            
            dataDao.edita('meta', parseFloat(value[0]))
                .then(() => bot.sendMessage(chatId, 'Meta Anual Atualizada: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
        }

        if(resp.toString().toLowerCase().includes('dado faturamento mensal')){
            var value = regNumber.exec(resp);
            
            dataDao.edita('fatmes', parseFloat(value[0]))
                .then(() => bot.sendMessage(chatId, 'Faturamento Mensal Atualizado: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
        }

        if(resp.toString().toLowerCase().includes('meta faturamento mensal')){
            var value = regNumber.exec(resp);
            
            dataDao.edita('metames', parseFloat(value[0]))
                .then(() => bot.sendMessage(chatId, 'Menta Mensal Atualizada: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
        }

        if(resp.toString().toLowerCase().includes('dado projetos anual')){
            var value = regProj.exec(resp);
            
            dataDao.edita('projetos', parseInt(value[0]))
                .then(() => bot.sendMessage(chatId, 'Projetos Anuais Atualizados: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
        }

        if(resp.toString().toLowerCase().includes('meta projetos anual')){
            var value = regProj.exec(resp);
            
            dataDao.edita('metaproj', parseInt(value[0]))
                .then(() => bot.sendMessage(chatId, 'Meta de Projetos Anuais Atualizados: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
        }

        if(resp.toString().toLowerCase().includes('dado projetos mensal')){
            var value = regProj.exec(resp);
            
            dataDao.edita('projmes', parseInt(value[0]))
                .then(() => bot.sendMessage(chatId, 'Projetos Mesais Atualizados: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
        }

        if(resp.toString().toLowerCase().includes('meta projetos mensal')){
            var value = regProj.exec(resp);
            
            dataDao.edita('metaprojmes', parseInt(value[0]))
                .then(() => bot.sendMessage(chatId, 'Meta de Projetos Mensais Atualizados: ' + value[0]))
                .catch((err) => bot.sendMessage(chatId, err ));
        }

        if(resp.toString().toLowerCase().includes('relat' && 'rio')){
            dataDao.busca('*')
                .then((result) => bot.sendMessage(chatId, `Faturamento Anual: ${result.faturamento}\nMeta Faturamento Anual: ${result.meta}\nProjetos Anual: ${result.projetos}\nMeta Projetos Anual ${result.metaproj}\nFaturamento Mensal: ${result.fatmes}\nMeta Faturamento Mensal: ${result.metames}\nProjetos Mensal: ${result.projmes}\nMeta Projetos Mensal ${result.metaprojmes}`))
                .catch((err) => bot.sendMessage(chatId, err ));
        }



    });
}