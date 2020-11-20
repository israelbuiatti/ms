import React from 'react'

export default function Cliente() {


    const lista = [
        {pedido:1, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 1", valor: "2.580,00"},
        {pedido:2, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 2", valor: "2.580,00"},
        {pedido:3, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 3", valor: "2.580,00"},
        {pedido:4, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 4", valor: "2.580,00"},
        {pedido:5, "data": "10/10/2020", cliente: "Joao da Silva Oliveira 5", valor: "2.580,00"},
    ];

    

    return (
        <>
            <section className="content-header">
                <h1> Cliente </h1>
                <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                <li className="active">Cliente</li>
                </ol>
            </section>
            <section className="content">

                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-body">
                                <a class="btn btn-app"> <i class="fa fa-edit"></i> Cadastrar </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Clientes</h3>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive">
                                <table className="table no-margin">
                                    <thead>
                                    <tr>
                                        <th>Pedido</th>
                                        <th>Data</th>
                                        <th>Cliente</th>
                                        <th>Valor</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            lista.map(pedido => (
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">#{pedido.pedido}</a></td>
                                                    <td>{pedido.data}</td>
                                                    <td><span className="label label-success">Shipped</span></td>
                                                    <td>
                                                    <td>{pedido.valor}</td>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            <div className="box-footer clearfix">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li><a href="#">«</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">»</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}
