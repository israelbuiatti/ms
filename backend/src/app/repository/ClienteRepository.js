import knex from '../../database';

class ClienteRepository {

    findById() {

    }

    async listar() {
        const results = await knex('cliente').withSchema('ms');
        return results;
    }

    salvar() {

    }

    alterar() {

    }

    deletar() {

    }



}


export default ClienteRepository;