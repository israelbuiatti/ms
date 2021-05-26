<?php include("../../cima.php") ?>
<script src="/pages/cliente/ClienteCtrl.js"></script>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" ng-controller="ClienteCtrl">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			-
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
			<li class="active">Cliente</li>
		</ol>
	</section>

	<!-- Main content -->
	<section class="content">


		<div style="text-align:right">
			<a class="btn btn-app" ng-click="novo()"><i class="fa fa-plus"></i> Novo </a>
		</div>

		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">Cliente</h3>
			</div>
			<!-- /.box-header -->
			<!-- form start -->

			<form class="form-horizontal">
				<div class="box-body">



					<div class="nav-tabs-custom">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#tab1" data-toggle="tab" aria-expanded="true">Dados</a></li>
							<li><a href="#tab2" data-toggle="tab" aria-expanded="false">Informações Bancárias</a></li>
							<li><a href="#tab3" data-toggle="tab">Informações Comerciais</a></li>
							<li><a href="#tab4" data-toggle="tab">Observações</a></li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="tab1">
								<?php include("tab1.php") ?>
							</div>
							<div class="tab-pane" id="tab2">
								<?php include("tab2.php") ?>
							</div>
							<div class="tab-pane" id="tab3">
								<?php include("tab3.php") ?>
							</div>
							<div class="tab-pane" id="tab4">
								<?php include("tab4.php") ?>
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