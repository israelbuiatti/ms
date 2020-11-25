import { Router } from 'express';

import clientesRouter from './clientes'
import pedidosRouter from './pedidos'

const routes = Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.use('/clientes', clientesRouter);
routes.use('/pedidos', pedidosRouter);

export default routes;