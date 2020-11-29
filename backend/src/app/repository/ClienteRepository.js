import knex from '../../database';

class ClienteRepository {

    constructor() {
        this.db = knex('cliente').withSchema('ms');
    }

    findById() {

    }

    async listar() {
        const results = await this.db
        //.select('id', 'nome_razao')
        return results;
    }

    async salvar(cliente) {
        const result = await this.db
            .returning('*')
            .insert(cliente);
        return result;
    }

    alterar() {

    }

    deletar() {

    }



}


export default ClienteRepository;