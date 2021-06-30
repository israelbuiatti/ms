import BaseRepository from './BaseRepository'

class ClienteRepository extends BaseRepository {

    table = 'cliente';

    async findAll() {
        const results = await this.db()
        // .select('id', 'nome_razao')
        return results;
    }

    async busca(cliente) {

        let query = this.db();

        if (cliente.nome_razao) {
            query.whereRaw('LOWER(nome_razao) LIKE ?', '%' + cliente.nome_razao.toLowerCase() + '%');
        }

        if (cliente.cnpj) {
            query.where('cnpj', cliente.cnpj);
        }

        return await query;

    }

    async insert(cliente) {
        const result = await this.db()
            .returning('*')
            .insert(cliente);
        return result[0];
    }

    async update(cliente) {

        const { id } = cliente;

        await this.findById(id);

        const result = await this.db()
            .where({ id })
            .update(cliente);
        return result;
    }

    async delete(id) {
        await this.findById(id);
        await this.db().where('id', id).del();
    }


}


export default ClienteRepository;