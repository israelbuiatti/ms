import BaseRepository from './BaseRepository'

class PedidoItemRepository extends BaseRepository {

    table = 'pedido_item';

    async findByPedido(id) {

        let query = this.db();

        query.join('produto', 'produto.id', '=', 'pedido_item.id_produto')

        query.select('pedido_item.*', 'produto.descricao')

        return await query;
    }

    async insert(pedidoItem) {

        console.log(pedidoItem);

        const result = await this.db()
            .returning('*')
            .insert(pedidoItem);
        return result[0];
    }

    async delete(id) {
        await this.findById(id);
        await this.db().where('id', id).del();
    }



}


export default PedidoItemRepository;