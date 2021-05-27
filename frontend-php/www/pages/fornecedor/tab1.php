<div class="form-group">
	<div class="col-sm-4">
		<label>Código</label>
		<input class="form-control" type="text" ng-model="fornecedor.codigo" disabled style="width:100px">
	</div>
</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>Razão Social</label>
		<input class="form-control" type="text" ng-model="fornecedor.razao_social">
	</div>

</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>Endereço</label>
		<input class="form-control" type="text" ng-model="fornecedor.endereco">
	</div>
</div>

<div class="form-group">

	<div class="col-sm-3">
		<label>Bairro</label>
		<input class="form-control" type="text" ng-model="fornecedor.bairro">
	</div>

	<div class="col-sm-3">
		<label>Estado</label>
		<select class="form-control" ng-model="fornecedor.estado" ng-change="carregaFornecedor()">
			<option value=""> - Selecione - </option>
			<option ng-repeat="option1 in listaFornecedor" value="{{option1.id}}">{{option1.nome_razao}}</option>
		</select>
	</div>

	<div class="col-sm-3">
		<label>Cidade</label>
		<select class="form-control" ng-model="fornecedor.cidade" ng-change="carregaFornecedor()">
			<option value=""> - Selecione - </option>
			<option ng-repeat="option1 in listaFornecedor" value="{{option1.id}}">{{option1.nome_razao}}</option>
		</select>
	</div>

</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>CEP</label>
		<input class="form-control" type="text" ng-model="fornecedor.cep" style="width:100px">
	</div>
</div>

<div class="form-group">

	<div class="col-sm-4">
		<label>CNPJ</label>
		<input class="form-control" type="text" ng-model="fornecedor.cnpj">
	</div>

	<div class="col-sm-4">
		<label>CGF</label>
		<input class="form-control" type="text" ng-model="fornecedor.cgf">
	</div>

</div>

<div class="form-group">

	<div class="col-sm-3">
		<label>Comissão Representante:</label>

		<div class="input-group">
			<div class="input-group-addon">
				<i class="fa fa-percent"></i>
			</div>
			<input ng-model="fornecedor.telefone1" class="form-control">
		</div>
	</div>

	<div class=" col-sm-3">
		<label>Comissão Vendedor:</label>

		<div class="input-group">
			<div class="input-group-addon">
				<i class="fa fa-percent"></i>
			</div>
			<input ng-model="fornecedor.telefone2" class="form-control">
		</div>
	</div>

	<div class="col-sm-3">
		<label>Comissão Telemarketing:</label>

		<div class="input-group">
			<div class="input-group-addon">
				<i class="fa fa-percent"></i>
			</div>
			<input ng-model="fornecedor.telefone3" class="form-control">
		</div>
	</div>
</div>