import { Router } from 'express';

import usersRouter from './users'

const routes = Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.use('/users', usersRouter);

export default routes;