<?php
session_start();
//if (!$_SESSION['gb_admin_usuario']) print "<script language= \"JavaScript\">location.href=\"login.php\"</script>";
?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Brigido | Painel de Controle</title>
	<!-- Tell the browser to be responsive to screen width -->
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<!-- Bootstrap 3.3.6 -->
	<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css" />
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
	<!-- Ionicons -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
	<!-- DataTables -->
	<link rel="stylesheet" href="/plugins/datatables/dataTables.bootstrap.css">
	<!-- Theme style -->
	<link rel="stylesheet" href="/dist/css/AdminLTE.css">
	<!-- AdminLTE Skins. Choose a skin from the css/skins
	folder instead of downloading all of them to reduce the load. -->
	<link rel="stylesheet" href="/dist/css/skins/_all-skins.min.css">
	<link rel="stylesheet" href="/dist/css/loader.css">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->


	<base href="https://buiatti-ms-frontend-php.herokuapp.com/">
	<script>
		var URL_API = "https://buiatti-ms-backend.herokuapp.com/"
	</script>


	<script src="plugins/jQuery/jquery-2.2.3.min.js"></script>
	<!-- Bootstrap 3.3.6 -->
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="bower_components/moment/min/moment.min.js"></script>
	<script type="text/javascript" src="bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
	<!-- DataTables -->
	<!-- SlimScroll -->
	<script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
	<!-- FastClick -->
	<script src="plugins/fastclick/fastclick.js"></script>
	<!-- AdminLTE App -->
	<script src="dist/js/app.min.js"></script>
	<!-- AdminLTE for demo purposes -->
	<script src="dist/js/demo.js"></script>

	<script src="node_modules/angular/angular.js"></script>
	<script src="scripts/app.js"></script>
	<script src="scripts/jquery.maskMoney.min.js"></script>
	<script src="scripts/controllers/teste.js"></script>

	<script src='dist/js/textAngular-rangy.min.js'></script>
	<script src='dist/js/textAngular-sanitize.min.js'></script>
	<script src='dist/js/textAngular.min.js'></script>


	<script src="plugins/input-mask/jquery.inputmask.js"></script>
	<script src="plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
	<script src="plugins/input-mask/jquery.inputmask.extensions.js"></script>

	<!-- page script -->
	<script>
		angular.element(document).ready(function() {
			$('body').css('display', 'block');
		});
	</script>

	<script type="text/javascript">
		$(function() {
			$('#datetimepicker4').datetimepicker({
				format: 'DD/MM/YYYY'
			});
			$('#datetimepicker5').datetimepicker({
				format: 'DD/MM/YYYY'
			});

			$(".moeda").maskMoney({
				decimal: ",",
				thousands: ".",
				allowZero: true
			});
			$('[data-mask]').inputmask()
		});
	</script>

</head>


<body class="hold-transition skin-blue sidebar-mini" ng-app="admin" style="display:none">



	<?php
	include("conexao.php");

	$stmt = $conn->query("select max(id) id_max from venda");
	$obj = $stmt->fetch();

	$id = $obj->id_max;
	$id++;

	?>


	<script>
		var ID = '<?= $id ?>';
	</script>

	<div class="cobre" style="display: none;">
		<div id="container-loader">
			<div id="loader"></div>
		</div>
	</div>

	<div class="wrapper">

		<?php include("header.php") ?>

		<!-- Left side column. contains the logo and sidebar -->
		<?php include("menu.php") ?>