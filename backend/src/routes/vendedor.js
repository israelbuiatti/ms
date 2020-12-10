import { Router } from 'express';
import VendedorController from '../app/controllers/VendedorController';

const routes = Router();
const vendedorController = new VendedorController();

routes.get('/', (req, res) => vendedorController.list(req, res)); // POSSUI ESSAS DUAS OPÇÕES PRA USAR O CONTEXTO THIS
routes.get('/:id', vendedorController.get.bind(vendedorController));
routes.post('/', vendedorController.create.bind(vendedorController));
routes.put('/:id', vendedorController.update.bind(vendedorController));
routes.delete('/:id', vendedorController.delete.bind(vendedorController));

export default routes;