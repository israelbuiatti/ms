import { Router } from 'express';

import clienteRouter from './cliente'
import pedidoRouter from './pedido'
import pedidoItemRouter from './pedidoItem'
import produtoRouter from './produto'
import fornecedorRouter from './fornecedor'
import vendedorRouter from './vendedor'
import regiaoRouter from './regiao'

const routes = Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.use('/cliente', clienteRouter);
routes.use('/produto', produtoRouter);
routes.use('/fornecedor', fornecedorRouter);
routes.use('/vendedor', vendedorRouter);
routes.use('/pedido', pedidoRouter);
routes.use('/pedidoItem', pedidoItemRouter);
routes.use('/regiao', regiaoRouter);

export default routes;