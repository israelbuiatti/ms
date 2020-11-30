import BaseRepository from './BaseRepository'

class ClienteRepository extends BaseRepository {

    table = 'cliente';

    async findById(id) {
        const result = await this.db().where('id', id).first();
        return result;
    }

    async findAll() {
        const results = await this.db()
        // .select('id', 'nome_razao')
        return results;
    }

    async insert(cliente) {
        const result = await this.db()
            .returning('*')
            .insert(cliente);
        return result;
    }

    async update(cliente) {

        const { id } = cliente;

        const result = await this.db()
            .where({ id })
            .update(cliente);
        return result;
    }

    async delete(id) {
        await this.db().where('id', id).del();
    }



}


export default ClienteRepository;