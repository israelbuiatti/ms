import express from 'express';
import 'express-async-errors'
import routes from './routes';
import cors from 'cors'
import AppError from './app/exception/AppError';


const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

if (process.env.NODE_ENV !== 'production') {
	import 'dotenv/config';
}

console.log("==========================");
console.log("=== AMBIENTE:", process.env.NODE_ENV);
console.log("==========================");

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use((err, request, response, next) => {

	if (err instanceof AppError) {
		return response.status(err.statusCode).json({
			status: 'error',
			message: err.message
		})
	}

	console.log(err);

	return response.status(500).json({
		status: 'error',
		message: 'Internal server error'
	})

});

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.listen(3333, () => {
	console.log('Server running on localhost:3333');
});