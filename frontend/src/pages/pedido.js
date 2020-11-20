import React from 'react';
import MenuPage from '../components/menuPage';
import Row from '../components/row';
import Card from '../components/card';
import Table from '../components/table';
import Content from '../components/content';



export default function Pedido() {


    const lista = [
        {pedido:1, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 1", valor: "2.580,00"},
        {pedido:2, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 2", valor: "2.580,00"},
        {pedido:3, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 3", valor: "2.580,00"},
        {pedido:4, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 4", valor: "2.580,00"},
        {pedido:5, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 5", valor: "2.580,00"},
    ];

    const breadcrumb = [
        {label: 'Home', url:'/'},
        {label: 'Pedido', active:true},
    ];

    const menu = [
        {label: 'Cadastrar', url:'/pedido/cadastrar'}
    ];

    return (
        <div className="content-wrapper">

            <Content breadcrumb={breadcrumb} title="Pedido">

                <MenuPage itens={menu}></MenuPage>

                <Row>
                    <Card title="Pedidos" col="12">
                        <Table>
                            <tr>
                                <th>Pedido</th>
                                <th>Data</th>
                                <th>Cliente</th>
                                <th>Valor</th>
                                <th>Status</th>
                            </tr>
                            {
                                lista.map((pedido,i) => (
                                    <tr key={i}>
                                        <td><a href="pages/examples/invoice.html">#{pedido.pedido}</a></td>
                                        <td>{pedido.data}</td>
                                        <td><span className="label label-success">Shipped</span></td>
                                        <td>{pedido.valor}</td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </Table>
                    </Card>
                </Row>
                
            </Content>

        </div>


    )
}
