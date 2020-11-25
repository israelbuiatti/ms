import express from 'express';
import routes from './routes';
import cors from 'cors'

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

app.listen(3333, () => {
	console.log('Server running on localhost:3333');
});