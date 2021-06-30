import BaseRepository from './BaseRepository'

class PedidoRepository extends BaseRepository {

    table = 'pedido';

    async findAll() {
        const results = await this.db()
        // .select('id', 'descricao')
        return results;
    }
    
    async busca(pedido) {

        console.log(pedido);

        let query = this.db();

        query.join('cliente', 'pedido.id_cliente', '=', 'cliente.id')

        query.select('pedido.*', 'cliente.nome_razao')

        if (pedido.id) {
            query.whereRaw('pedido.id=' + pedido.id+ ' or LOWER(pedido.pedido) LIKE ?', '%' + pedido.id.toLowerCase() + '%');
        }
        
        if (pedido.nome_razao) {
            query.whereRaw('LOWER(cliente.nome_razao) LIKE ?', '%' + pedido.nome_razao.toLowerCase() + '%');
        }

        return await query;

    }

    async insert(pedido) {
        const result = await this.db()
            .returning('*')
            .insert(pedido);
        return result[0];
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