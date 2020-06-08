class MemberDao {

    constructor(db) {
        this._db = db;
    }
    
    insert(id,name) { 
        return new Promise((resolve, reject) => {
            this._db.query(
                `
                    INSERT INTO member
                    (id,
                    nome)
                    values (?,?)
                `,[
                    id,
                    name
                ],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o dado!');
                    }
                    return resolve();
                }
            );
        });
    }


    listIdByName(name) { 
        return new Promise((resolve, reject) => {
            this._db.query(
                `
                    SELECT id
                    FROM member
                    WHERE nome = ?
                `,[
                    name
                ],
                (erro, id) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o dado!');
                    }
                    return resolve(id[0]);
                }
            );
        });
    }

    list(){
        return new Promise((resolve, reject) => {
            this._db.query(
                `
                    SELECT nome
                    FROM member
                    ORDER BY nome
                `,
                (erro, lista) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o dado!');
                    }
                    return resolve(lista);
                }
            );
        });
    }

}

module.exports = MemberDao; 