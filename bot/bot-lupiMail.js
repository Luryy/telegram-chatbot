const db = require('../infra/conexao');
const MemberDao = require('../infra/member-dao');
const memberDao = new MemberDao(db);

module.exports = function(bot)
{
    bot.onText(/\/cadastro (.+)/, (msg, match) => {

        const regexValidation = /\w+/

        const bolean = match[1].replace(regexValidation, '')

        const fromId = msg.from.id;
        const name = match[1];

        if(!bolean){
            memberDao.insert(fromId, name)
             .then(() => bot.sendMessage(fromId,`Cadastrado, ${name}`))
             .catch(() => bot.sendMessage(fromId,`Você já está cadastrado, ${name}`)); 
        }else{
            bot.sendMessage(fromId, "O nome não pode ter espaços!")
        }

        
    
    })

    bot.onText(/\/lupimail (.+)/, (msg, match) => {

        const regexName = /\w+/
        const regexMsg = /\/lupimail \w+/

        const fromId = msg.from.id;

        const toName = regexName.exec(match[1]);
        const resp = match.input.replace(regexMsg, '')

        async function send(){
            const toId = await memberDao.listIdByName(toName);
            if(toId){
                await bot.sendMessage(toId.id, resp);
                await bot.sendMessage(fromId, 'Mensagem enviada com sucesso!');
            } else {
                bot.sendMessage(fromId, 'Não consegui achar o destinatário\nLembre de escrever o nome igual ao da lista!');
            }
        }

        send();

    
    })

    bot.onText(/\/membrosmail (.+)/, (msg, match) => {

        const fromId = msg.from.id;
        const resp = match[1];

        async function getMembers(){
            const members = await memberDao.list();
            const membersArray = members.map(member => member.nome);
            const listMsg = membersArray.join('\n')
            bot.sendMessage(fromId, 'A lista de membros é\n\n' + listMsg);
    
        }

        getMembers();

    
    })
}