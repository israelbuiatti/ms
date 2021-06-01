import { Router } from 'express';

import estadoRouter from './estado'
import cidadeRouter from './cidade'

const routes = Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.use('/estado', estadoRouter);
routes.use('/cidade', cidadeRouter);

export default routes;