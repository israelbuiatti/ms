<div class="col-md-6" style="margin-bottom:20px">
	<form role="form">
		<div class="box-body">
			<div class="form-group">
				<label>Pedido</label>
				<input class="form-control" placeholder="Digite o Nº do Pedido" ng-model="busca.id">
			</div>
			<div class="form-group">
				<label>Cliente</label>
				<input class="form-control" placeholder="Digite a Razão Social" ng-model="busca.nome_razao">
			</div>
		</div>

		<div class="box-footer">
			<button type="submit" class="btn btn-primary" ng-click="buscar()">Buscar</button>
		</div>
	</form>

</div>


<div class="box-body">
	<table id="example2" class="table table-bordered table-hover">
		<thead>
			<tr>
				<th>Pedido</th>
				<th>Data</th>
				<th>Cliente</th>
				<th>Valor</th>
				<th width="10%"></th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="item in listaPedido">
				<td width="100px">{{item.id}}</td>
				<td width="150px">{{item.data}}</td>
				<td>{{item.nome_razao}}</td>
				<td class="text-center" width="200px">{{item.valor | currency:'R$ '}}</td>
				<td class="text-center" width="100px">
					<button type="button" title="Editar" style="margin-right:5px" class="btn btn-sm" ng-click="preparaAlterar(item)"><i class="fa fa-edit"></i></button>
					<button type="button" title="Excluir" style="margin-right:5px" class="btn btn-sm" ng-click="excluir(item)"><i class="fa fa-times"></i></button>
				</td>
			</tr>
		</tbody>
	</table>


	<?php include("../paginacao.php") ?>

</div>