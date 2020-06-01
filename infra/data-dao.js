class DataDao {

    constructor(db) {
        this._db = db;
    }

    edita(dado, data) {
        return new Promise((resolve, reject) => {
            console.log(data);
            this._db.query(`
                UPDATE data SET
                ${dado} = ?
                WHERE id = 1
            `,
            [
                data
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível editar o dado!');
                }

                resolve();
            });
        });
    }

    busca(dado) { 
        return new Promise((resolve, reject) => {
            this._db.query(
                `
                    SELECT ${dado}
                    FROM data
                    WHERE id = 1
                `,
                (erro, prato) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o dado!');
                    }
                    return resolve(prato[0]);
                }
            );
        });
    }
    
}

module.exports = DataDao; 