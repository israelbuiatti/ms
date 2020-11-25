import React, { useState, useEffect } from 'react';
import MenuPage from '../../components/menuPage';
import Row from '../../components/row';
import Card from '../../components/card';
import Table from '../../components/table';
import Content from '../../components/content';
import api from '../../services/api';
import Button from '../../components/Button';
import ExcluirConfirm from '../../components/ExcluirConfirm';


export default function Pedido() {

    const breadcrumb = [
        {label: 'Pedido', active:true},
    ];

    const menu = [
        {label: 'Cadastrar', url:'/pedido/cadastrar'}
    ];

    const[show, setShow] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {    
        getLista();
    },[]);

    const getLista = async () => {
        const response = await api.get('pedidos');
        setLista(response.data);
    }

    const editar = (item) => {
        console.log(item);
        this.onClick('displayBasic');
    }

    const excluir = (item) => {
        console.log(item);
        alert('excluir');
    }

    const onConfirm = (item) => {
        console.log(item);
        alert('excluido!');
    }



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
                                <th>Status</th>
                                <th>Valor</th>
                                <th>Ação</th>
                            </tr>
                            {
                                lista.map((pedido,i) => (
                                    <tr key={i}>
                                        <td><a href="pages/examples/invoice.html">#{pedido.pedido}</a></td>
                                        <td>{pedido.data}</td>
                                        <td><span className="label label-success">Shipped</span></td>
                                        <td>{pedido.valor}</td>
                                        <td>
                                            <Button icon="pencil" tooltip="Editar" onClick={() => editar(pedido)}></Button>
                                            <ExcluirConfirm onConfirm={() => onConfirm(pedido)}/>
                                        </td>
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
