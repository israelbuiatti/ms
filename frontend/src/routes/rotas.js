import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Pedido from '../pages/pedido'
import Cliente from '../pages/cliente'
import { BrowserRouter as Router } from 'react-router-dom';


export default function Rotas(props){
    return (
        <Router>
            <Switch>
                <Route path="/" component={Pedido} exact/>
                <Route path="/pedido" component={Pedido} />
                <Route path="/cliente" component={Cliente} />
            </Switch>
        </Router>
    )
}
