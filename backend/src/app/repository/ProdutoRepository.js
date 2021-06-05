import BaseRepository from './BaseRepository'

class ProdutoRepository extends BaseRepository {

    table = 'produto';

    async findAll() {
        const results = await this.db()
        // .select('id', 'descricao')
        return results;
    }

    async busca(produto) {

        let query = this.db();

        if (produto.descricao) {
            query.whereRaw('LOWER(descricao) LIKE ?', '%' + produto.descricao.toLowerCase() + '%');
        }

        if (produto.id_fornecedor) {
            query.where('id_fornecedor', produto.id_fornecedor);
        }

        return await query;

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