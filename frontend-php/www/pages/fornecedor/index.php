<?php include("../../cima.php") ?>
<script src="/pages/fornecedor/FornecedorCtrl.js"></script>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" ng-controller="FornecedorCtrl">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			-
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
			<li class="active">Fornecedor</li>
		</ol>
	</section>

	<!-- Main content -->
	<section class="content">


		<div style="text-align:right">
			<a class="btn btn-app" ng-click="novo()"><i class="fa fa-plus"></i> Novo </a>
		</div>

		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">Fornecedor</h3>
			</div>
			<!-- /.box-header -->
			<!-- form start -->

			<form class="form-horizontal">
				<div class="box-body">



					<div class="nav-tabs-custom">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#tab1" data-toggle="tab" aria-expanded="true">Dados</a></li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="tab1">
								<?php include("tab1.php") ?>
							</div>
						</div>
					</div>



				</div>

				<div class="box-footer">
					<button type="submit" class="btn btn-primary" ng-click="cadastrar()">Cadastrar</button>
					<button type="submit" class="btn btn-primary" ng-click="alterar()">Alterar</button>
					<button type="submit" class="btn" ng-click="cancelar()">Cancelar</button>
				</div>

			</form>
			<!-- /.box-body -->

			<!-- /.box-footer -->
		</div>

	</section>

</div>


<?php include("../../baixo.php") ?>