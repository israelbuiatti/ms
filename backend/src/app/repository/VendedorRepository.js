import BaseRepository from './BaseRepository'

class VendedorRepository extends BaseRepository {

    table = 'vendedor';

    async findAll() {
        const results = await this.db()
        // .select('id', 'descricao')
        return results;
    }

    async insert(vendedor) {
        const result = await this.db()
            .returning('*')
            .insert(vendedor);
        return result;
    }

    async update(vendedor) {

        const { id } = vendedor;

        await this.findById(id);

        const result = await this.db()
            .where({ id })
            .update(vendedor);
        return result;
    }

    async delete(id) {
        await this.findById(id);
        await this.db().where('id', id).del();
    }



}


export default VendedorRepository;