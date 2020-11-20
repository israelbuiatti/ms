import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Cliente from '../pages/cliente'
import { BrowserRouter as Router } from 'react-router-dom';
import PedidoForm from '../pages/pedido/pedido-form';
import Pedido from '../pages/pedido/pedido';


export default function Rotas(props){
    return (
        <Router>
            <Switch>
                <Route path="/" component={Pedido} exact/>
                <Route exact path="/pedido" component={Pedido}/>
                <Route exact path="/pedido/cadastrar" component={PedidoForm}/>
                <Route path="/cliente" component={Cliente} />

            </Switch>
        </Router>
    )
}
