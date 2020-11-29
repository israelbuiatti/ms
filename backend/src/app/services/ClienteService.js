import ClienteRepository from '../repository/ClienteRepository'
import AppError from '../exception/AppError';

class ClienteService {

    constructor() {
        this.repository = new ClienteRepository();
    }

    findById() {
        this.repository.findById();
    }

    async listar() {
        const results = await this.repository.listar();
        return results;
    }

    async salvar(cliente) {

        if (!cliente.cnpj) {
            throw new AppError("CNPJ deve ser preenchido!");
        }

        const result = await this.repository.salvar(cliente);
        return result;
    }

    alterar() {
        this.repository.alterar();
    }

    deletar() {
        this.repository.deletar();
    }



}


export default ClienteService;