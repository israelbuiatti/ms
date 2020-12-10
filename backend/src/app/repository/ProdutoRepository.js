import BaseRepository from './BaseRepository'

class ProdutoRepository extends BaseRepository {

    table = 'produto';

    async findAll() {
        const results = await this.db()
        // .select('id', 'descricao')
        return results;
    }

    async insert(produto) {
        const result = await this.db()
            .returning('*')
            .insert(produto);
        return result;
    }

    async update(produto) {

        const { id } = produto;

        await this.findById(id);

        const result = await this.db()
            .where({ id })
            .update(produto);
        return result;
    }

    async delete(id) {
        await this.findById(id);
        await this.db().where('id', id).del();
    }



}


export default ProdutoRepository;