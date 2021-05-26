<?php include("cima.php") ?>
<script src="scripts/controllers/PedidoCtrl.js"></script>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" ng-controller="PedidoCtrl">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			-
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
			<li class="active">Pedido</li>
		</ol>
	</section>

	<!-- Main content -->
	<section class="content">


		<div style="text-align:right">
			<a class="btn btn-app" ng-click="novo()"><i class="fa fa-plus"></i> Novo </a>
		</div>

		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">Pedido</h3>
			</div>
			<!-- /.box-header -->
			<!-- form start -->

			<form class="form-horizontal">
				<div class="box-body">


					<div class="form-group">
						<label class="col-sm-1 control-label" style="padding-right:0">Pedido</label>
						<div class="col-sm-4">
							<input class="form-control" ng-model="pedido.pedido" type="text" style="width:100px" ng-blur="pesquisarPedido()" ng-disabled=true ng-value="123">
						</div>

						<label class="col-sm-1 control-label" style="padding-right:0">Data</label>
						<div class="col-sm-1">
							<input ng-model="pedido.data" class="form-control" id='datetimepicker4' style="width:100px" />
						</div>

						<label class="col-sm-2 control-label" style="padding-right:0">Tipo Pagamento</label>
						<div class="col-sm-1">
							<input class="form-control" type="text" ng-model="pedido.tipopag" style="width:100px">
						</div>


					</div>

					<div class="form-group">
						<label class="col-sm-1 control-label" style="padding-right:0">Fornecedor</label>
						<div class="col-sm-4">
							<select class="form-control" ng-model="pedido.fornecedor" ng-change="carregaFornecedor()">
								<option value=""> - Selecione - </option>
								<option ng-repeat="option1 in listaFornecedor" value="{{option1.id}}">{{option1.nome_razao}}</option>
							</select>
						</div>
						<label class="col-sm-1 control-label" style="padding-right:0">Prazo</label>
						<div class="col-sm-1">
							<input class="form-control" id="inputEmail3" type="text" ng-model="pedido.prazo" style="width:100px">
						</div>
					</div>

					<div class="form-group">
						<label class="col-sm-1 control-label" style="padding-right:0">Cliente</label>
						<div class="col-sm-11">
							<div>
								<input type="text" class="form-control" style="width:400px; float:left" value="{{pedido.razao}}" disabled>
								<button data-toggle="modal" data-target="#myModal" style="float:left; height:34px">Pesquisar</button>
								<div style="clear:both"></div>
							</div>

						</div>
					</div>

					<div class="form-group">
						<label class="col-sm-1 control-label" style="padding-right:0">Vendedor</label>
						<div class="col-sm-4">
							<select class="form-control" ng-model="pedido.vendedor">
								<option value=""> - Selecione - </option>
								<option ng-repeat="option2 in listaVendedor" value="{{option2.id}}">{{option2.nome}}</option>
							</select>
						</div>
						<label class="col-sm-1 control-label" style="padding-right:0">Telemarketing</label>
						<div class="col-sm-4">
							<select class="form-control" ng-model="pedido.tel">
								<option value=""> - Selecione - </option>
								<option ng-repeat="option3 in listaTelemarketing" value="{{option3.id}}">{{option3.nome}}</option>
							</select>
						</div>
					</div>


					<div style="text-align:center">
						<button ng-if="!pedidoItem" type="submit" class="btn btn-primary" ng-click="cadastrar()">Cadastrar</button>
						<button ng-if="pedidoItem" type="submit" class="btn btn-primary" ng-click="alterar()">Alterar</button>
					</div>
					<hr>

					<div ng-show="pedidoItem">

						<table class="table">
							<tr>
								<th> Produto </th>
								<th style="text-align:center"> Quantidade </th>
								<th style="text-align:center"> Preço </th>
								<th style="text-align:center"> Total </th>
							</tr>
							<tr>
								<td width="400px">
									<div>
										<input type="text" class="form-control" style="width:300px; float:left" value="{{produto.nome}}" disabled>
										<button data-toggle="modal" data-target="#modalProduto" style="float:left; height:34px">Pesquisar</button>
										<div style="clear:both"></div>
									</div>
								</td>
								<td align="center"> <input class="form-control" ng-model="pItem.quantidade" type="text" style="width:100px"> </td>
								<td align="center"> <input class="form-control moeda" ng-model="pItem.preco" type="text" style="width:100px"> </td>
								<td style="text-align:center"> <button type="submit" class="btn btn-primary" ng-click="adicionarItem()">Adicionar</button> </td>
							</tr>
							<tr ng-repeat="item in itens">
								<td> {{item.nome}} </td>
								<td style="text-align:center"> {{item.quantidade}} </td>
								<td style="text-align:center"> {{item.preco | currency:'R$'}} </td>
								<td style="text-align:center"> {{item.total | currency:'R$'}} </td>
								<td>
									<button type="button" class="btn btn-sm" ng-click="excluir(item)"><i class="fa fa-times"></i></button>
								</td>
							</tr>

						</table>

					</div>


				</div>
			</form>
			<!-- /.box-body -->

			<!-- /.box-footer -->
		</div>

		<div class="box box-info" ng-show="pedidoItem">
			<div class="box-header with-border">
				<h3 class="box-title">Baixa</h3>
			</div>
			<!-- /.box-header -->
			<!-- form start -->
			<div class="box-body">

				<div class="form-group">
					<div class="col-sm-12">
						Comissão vendedor: {{fornecedor.comissao_vend}}% <br>
						Comissão telemarketing: {{fornecedor.comissao_tel}}%
					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-1 control-label" style="padding-right:0">NF</label>
					<div class="col-sm-1">
						<input class="form-control" ng-model="pedido.nf_baixado" type="text" style="width:100px">
					</div>

					<label class="col-sm-1 control-label" style="padding-right:0">Data</label>
					<div class="col-sm-1">
						<input ng-model="pedido.data_baixado" class="form-control" id='datetimepicker5' style="width:100px" />
					</div>

					<label class="col-sm-2 control-label" style="padding-right:0">Valor</label>
					<div class="col-sm-2">
						<input class="form-control moeda" type="text" ng-model="pedido.valor_baixado" style="width:100px">
					</div>

					<div class="col-sm-1">
						<button type="submit" class="btn btn-primary" ng-click="baixar()">Baixar</button>
					</div>


				</div>



			</div>
			<!-- /.box-body -->

			<!-- /.box-footer -->
		</div>

		<script>
			$('#myModal').on('shown.bs.modal', function() {
				$('#myInput').focus()
			})
		</script>

		<!-- Modal -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">Cliente</h4>
					</div>
					<div class="modal-body">

						<input type="text" ng-change="pesquisar(search)" ng-model="search" class="form-control input-lg" placeholder="Digite o nome do cliente" autofocus autocomplete="off">
						<hr>
						<table class="table">
							<tr ng-repeat="cliente in clientes">
								<td> <button ng-click="selecionar(cliente)" data-dismiss="modal">selecionar</button> </td>
								<td> {{cliente.razao}} </td>
							</tr>
						</table>

					</div>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="modalProduto" tabindex="-1" role="dialog" aria-labelledby="modalProdutoLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="modalProdutoLabel">Produto</h4>
					</div>
					<div class="modal-body">

						<input type="text" ng-change="pesquisarProduto(search)" ng-model="search" class="form-control input-lg" placeholder="Digite o produto" autofocus autocomplete="off">
						<hr>
						<table class="table">
							<tr ng-repeat="produto in produtos">
								<td>
									<button ng-click="selecionarProduto(produto)" data-dismiss="modal">selecionar</button>
								</td>
								<td>{{produto.nome}} - {{produto.id}}</td>
							</tr>
						</table>

					</div>
				</div>
			</div>
		</div>


	</section>
	<!-- /.content -->
</div>


<?php include("baixo.php") ?>