import BaseModel from "./BaseModel";

export default class Pedido extends BaseModel {

    static attrs = ['id', 'id_cliente', 'id_fornecedor', 'id_vendedor']


}