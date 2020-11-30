import { Router } from 'express';
import ClienteController from '../app/controllers/ClienteController';

const routes = Router();
const clienteController = new ClienteController();

routes.get('/', (req, res) => clienteController.list(req, res)); // POSSUI ESSAS DUAS OPÇÕES PRA USAR O CONTEXTO THIS
routes.get('/:id', clienteController.get.bind(clienteController));
routes.post('/', clienteController.create.bind(clienteController));
routes.put('/:id', clienteController.update.bind(clienteController));
routes.delete('/:id', clienteController.delete.bind(clienteController));

export default routes;