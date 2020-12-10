import FornecedorRepository from '../repository/FornecedorRepository'
import AppError from '../exception/AppError';

class FornecedorService {

    constructor() {
        this.repository = new FornecedorRepository();
    }

    async findById(id) {
        const result = await this.repository.findById(id);
        return result;
    }

    async findAll() {
        const results = await this.repository.findAll();
        return results;
    }

    async insert(fornecedor) {

        this.validar(fornecedor);

        const result = await this.repository.insert(fornecedor);
        return result;
    }

    async update(fornecedor) {

        if (!fornecedor.id) throw new AppError("Campo ID obrigatório!");
        this.validar(fornecedor);

        const result = await this.repository.update(fornecedor);
        return result;
    }

    async delete(id) {
        const result = await this.repository.findById(id);
        if (!result) throw new AppError("Registro não encontrado.");

        await this.repository.delete(id);
    }

    validar(fornecedor) {
        if (!fornecedor.nome_razao) throw new AppError("Campo Razão Social obrigatório!");
    }


}


export default FornecedorService;