import ClienteRepository from '../repository/ClienteRepository'

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

    salvar() {
        this.repository.salvar();
    }

    alterar() {
        this.repository.alterar();
    }

    deletar() {
        this.repository.deletar();
    }



}


export default ClienteService;