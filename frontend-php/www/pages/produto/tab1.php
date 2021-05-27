<div class="form-group">
	<div class="col-sm-4">
		<label>Código</label>
		<input class="form-control" type="text" ng-model="produto.codigo" disabled style="width:100px">
	</div>
</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>Fornecedor</label>
		<select class="form-control" ng-model="produto.estado" ng-change="carregaFornecedor()">
			<option value=""> - Selecione - </option>
			<option ng-repeat="option1 in listaFornecedor" value="{{option1.id}}">{{option1.nome_razao}}</option>
		</select>
	</div>
</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>Descrição</label>
		<input class="form-control" type="text" ng-model="produto.descricao">
	</div>
</div>