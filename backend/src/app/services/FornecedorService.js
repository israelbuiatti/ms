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

    async busca(fornecedor) {
        return await this.repository.busca(fornecedor);
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

        fornecedor.comissao_repr = this.moedaToUS(fornecedor.comissao_repr);
        fornecedor.comissao_vend = this.moedaToUS(fornecedor.comissao_vend);
        fornecedor.comissao_tel = this.moedaToUS(fornecedor.comissao_tel);

    }

    moedaToUS(value) {
        value = value.toString();
        value = value.split(".").join("");
        value = value.split(",").join(".");
        return value;
    }


}


export default FornecedorService;