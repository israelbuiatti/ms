import { Router } from 'express';

const routes = Router();


const lista = [
    {pedido:1, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 1", valor: "2.580,00"},
    {pedido:2, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 2", valor: "2.580,00"},
    {pedido:3, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 3", valor: "2.580,00"},
    {pedido:4, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 4", valor: "2.580,00"},
    {pedido:5, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 5", valor: "2.580,00"},
];

routes.get('/', (req, res) => {
    return res.json(lista);
});

export default routes;