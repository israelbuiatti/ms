import { Router } from 'express';
import ClienteController from '../app/controllers/ClienteController';

const routes = Router();
const clienteController = new ClienteController();

routes.get('/', (req, res) => clienteController.list(req, res)); // POSSUI ESSAS DUAS OPÇÕES PRA USAR O CONTEXTO THIS
routes.get('/:id', clienteController.get.bind(clienteController));
routes.post('/', clienteController.create.bind(clienteController));

export default routes;