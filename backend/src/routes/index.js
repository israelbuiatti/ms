import { Router } from 'express';

import clienteRouter from './cliente'
//import pedidoRouter from './pedido'
import produtoRouter from './produto'
import fornecedorRouter from './fornecedor'
import vendedorRouter from './vendedor'

const routes = Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.use('/cliente', clienteRouter);
routes.use('/produto', produtoRouter);
routes.use('/fornecedor', fornecedorRouter);
routes.use('/vendedor', vendedorRouter);
//routes.use('/pedido', pedidoRouter);

export default routes;