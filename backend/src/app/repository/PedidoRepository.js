import BaseRepository from './BaseRepository'

class PedidoRepository extends BaseRepository {

    table = 'pedido';

    async findAll() {
        const results = await this.db()
        // .select('id', 'descricao')
        return results;
    }

    async insert(pedido) {
        const result = await this.db()
            .returning('*')
            .insert(pedido);
        return result;
    }

    async update(pedido) {

        const { id } = pedido;

        await this.findById(id);

        const result = await this.db()
            .where({ id })
            .update(pedido);
        return result;
    }

    async delete(id) {
        await this.findById(id);
        await this.db().where('id', id).del();
    }



}


export default PedidoRepository;