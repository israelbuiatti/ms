<?php include("../../cima.php") ?>
<script src="/pages/cliente/ClienteCtrl.js"></script>


<div class="content-wrapper" ng-controller="ClienteCtrl">

	<section class="content-header">
		<h1>
			-
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
			<li class="active">Cliente</li>
		</ol>
	</section>


	<section class="content">

		<div style="text-align:right">
			<a class="btn btn-app" ng-click="preparaCadastrar()"><i class="fa fa-plus"></i> Novo </a>
		</div>

		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">Cliente</h3>
			</div>


			<div ng-show="state == 'search'">
				<?php include("search.php") ?>
			</div>

			<div ng-show="state == 'insert' || state == 'update'">
				<?php include("form.php") ?>
			</div>

		</div>

	</section>


</div>


<?php include("../../baixo.php") ?>