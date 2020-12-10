import PedidoRepository from '../repository/PedidoRepository'
import AppError from '../exception/AppError';

class PedidoService {

    constructor() {
        this.repository = new PedidoRepository();
    }

    async findById(id) {
        const result = await this.repository.findById(id);
        return result;
    }

    async findAll() {
        const results = await this.repository.findAll();
        return results;
    }

    async insert(pedido) {

        this.validar(pedido);

        const result = await this.repository.insert(pedido);
        return result;
    }

    async update(pedido) {

        if (!pedido.id) throw new AppError("Campo ID obrigatório!");
        this.validar(pedido);

        const result = await this.repository.update(pedido);
        return result;
    }

    async delete(id) {
        await this.repository.delete(id);
    }

    validar(pedido) {
        if (!pedido.id_cliente) throw new AppError("Campo Cliente obrigatório!");
    }



}


export default PedidoService;