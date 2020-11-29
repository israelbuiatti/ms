import knex from '../../database';
import ClienteService from '../services/ClienteService';

export default class ClienteController {

	constructor() {
		this.clienteService = new ClienteService();
	}



	async list(req, res) {

		const results = await this.clienteService.listar();

		return res.json(results);

	}

	async get(req, res) {

		const { id } = req.params;

		console.log(id);

		const results = await knex('cliente').withSchema('ms').where('id', id).first();

		console.log(results);

		return res.json(results);

	}

	async create(req, res) {

		const { nome_razao } = req.body;

		const cliente = {
			nome_razao
		}

		const result = await this.clienteService.salvar(cliente);

		return res.json(result);

	}


}