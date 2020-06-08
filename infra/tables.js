class Tables {

    init(conexao) {
        this._conexao = conexao
        this._createData();
        this._createMember();
    }

    _createData(){
        const DATA_SCHEMA = 
            `
            CREATE TABLE IF NOT EXISTS data (
                id INT NOT NULL AUTO_INCREMENT, 
                ej varchar(30) NULL DEFAULT 'EJ', 
                faturamento NUMERIC(8,2) NULL DEFAULT 0, 
                meta NUMERIC(8,2) NULL DEFAULT 0,
                projetos INT NULL DEFAULT 0,
                metaproj INT NULL DEFAULT 0,
                metames NUMERIC(8,2) NULL DEFAULT 0,
                fatmes NUMERIC(8,2) NULL DEFAULT 0,
                metaprojmes INT NULL DEFAULT 0,
                projmes INT NULL DEFAULT 0,
                PRIMARY KEY(id))
                
            `;

        this._conexao.query(DATA_SCHEMA, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Table data ok')
            }
        })
    }

    _createMember(){
        const MEMBER_SCHEMA = 
            `
            CREATE TABLE IF NOT EXISTS member (
                id INT NOT NULL, 
                nome varchar(30) NOT NULL, 
                PRIMARY KEY(id))
            `;

        this._conexao.query(MEMBER_SCHEMA, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Table Member ok')
            }
        })
    }
}

module.exports = new Tables;