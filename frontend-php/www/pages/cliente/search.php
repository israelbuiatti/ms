
<div class="box-body">
	<table id="example2" class="table table-bordered table-hover">
		<thead>
			<tr>
				<th>ID</th>
				<th>Nome Razão</th>
				<th>CNPJ</th>
				<th width="10%"></th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="item in listaClientes">
				<td>{{item.id}}</td>
				<td>{{item.nome_razao}}</td>
				<td>{{item.cnpj}}</td>
				<td class="text-center">
					<button type="button" title="Editar" style="margin-right:5px" class="btn btn-sm" ng-click="preparaAlterar(item)"><i class="fa fa-edit"></i></button>
					<button type="button" title="Excluir" style="margin-right:5px" class="btn btn-sm" ng-click="excluir(item)"><i class="fa fa-times"></i></button>
				</td>
			</tr>
		</tbody>
	</table>


	<?php include("paginacao.php") ?>

</div>