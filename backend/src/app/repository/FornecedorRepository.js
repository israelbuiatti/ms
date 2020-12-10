import BaseRepository from './BaseRepository'

class FornecedorRepository extends BaseRepository {

    table = 'fornecedor';

    async findAll() {
        const results = await this.db()
        // .select('id', 'descricao')
        return results;
    }

    async insert(fornecedor) {
        const result = await this.db()
            .returning('*')
            .insert(fornecedor);
        return result;
    }

    async update(fornecedor) {

        const { id } = fornecedor;

        await this.findById(id);

        const result = await this.db()
            .where({ id })
            .update(fornecedor);
        return result;
    }

    async delete(id) {
        await this.findById(id);
        await this.db().where('id', id).del();
    }



}


export default FornecedorRepository;