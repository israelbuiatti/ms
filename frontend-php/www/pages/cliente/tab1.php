<div class="form-group">
	<div class="col-sm-4">
		<label>Código</label>
		<input class="form-control" type="text" ng-model="cliente.id" disabled style="width:100px">
	</div>
</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>Razão Social</label>
		<input class="form-control" type="text" ng-model="cliente.nome_razao">
	</div>

	<div class="col-sm-4">
		<label>Comprador</label>
		<input class="form-control" type="text" ng-model="cliente.comprador">
	</div>
</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>Endereço</label>
		<input class="form-control" type="text" ng-model="cliente.endereco">
	</div>
</div>

<div class="form-group">

	<div class="col-sm-3">
		<label>Bairro</label>
		<input class="form-control" type="text" ng-model="cliente.bairro">
	</div>

	<div class="col-sm-3">
		<label>Estado</label>
		<select class="form-control" ng-model="cliente.estado" ng-change="carregaFornecedor()">
			<option value=""> - Selecione - </option>
			<option ng-repeat="option1 in listaFornecedor" value="{{option1.id}}">{{option1.nome_razao}}</option>
		</select>
	</div>

	<div class="col-sm-3">
		<label>Cidade</label>
		<select class="form-control" ng-model="cliente.cidade" ng-change="carregaFornecedor()">
			<option value=""> - Selecione - </option>
			<option ng-repeat="option1 in listaFornecedor" value="{{option1.id}}">{{option1.nome_razao}}</option>
		</select>
	</div>

</div>

<div class="form-group">
	<div class="col-sm-4">
		<label>CEP</label>
		<input class="form-control" type="text" ng-model="cliente.cep" style="width:100px">
	</div>
</div>

<div class="form-group">

	<div class="col-sm-4">
		<label>CNPJ</label>
		<input class="form-control" type="text" ng-model="cliente.cnpj">
	</div>

	<div class="col-sm-4">
		<label>CGF</label>
		<input class="form-control" type="text" ng-model="cliente.cgf">
	</div>

</div>

<div class="form-group">

	<div class="col-sm-3">
		<label>Região</label>
		<select class="form-control" ng-model="cliente.regiao" ng-change="carregaFornecedor()">
			<option value=""> - Selecione - </option>
			<option ng-repeat="option1 in listaFornecedor" value="{{option1.id}}">{{option1.nome_razao}}</option>
		</select>
	</div>

</div>


<div class="form-group">

	<div class="col-sm-3">
		<label>Telefone 1:</label>

		<div class="input-group">
			<div class="input-group-addon">
				<i class="fa fa-phone"></i>
			</div>
			<input ng-model="cliente.tel1" class="form-control">
		</div>
	</div>

	<div class=" col-sm-3">
		<label>Telefone 2:</label>

		<div class="input-group">
			<div class="input-group-addon">
				<i class="fa fa-phone"></i>
			</div>
			<input ng-model="cliente.tel2" class="form-control">
		</div>
	</div>

	<div class="col-sm-3">
		<label>Telefone 3:</label>

		<div class="input-group">
			<div class="input-group-addon">
				<i class="fa fa-phone"></i>
			</div>
			<input ng-model="cliente.fax" class="form-control">
		</div>
	</div>
</div>