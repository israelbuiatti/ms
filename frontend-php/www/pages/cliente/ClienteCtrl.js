'use strict';

angular.module('admin').controller('ClienteCtrl', ["$scope", "$http", function ($scope, $http) {

	this.$onInit = () => {
		$scope.cancel();
		$scope.getEstados();
		$scope.getCidades();
		$scope.getListaClientes();
	}


	//---------------
	$scope.isEmty = (param) => {

		if (param == undefined || param == '') {
			return true;
		}
		return false;

	}


	$scope.getEstados = () => {

		loadingOn();
		$http({ method: 'GET', url: URL_API_CONSULTA_CEP + 'estado'})
			.then(
				(response) => $scope.listaEstados = response.data, 
				(error) => alert(error.data.message)
			)
			.finally(() => loadingOff());

	}
	

	$scope.getCidades = () => {

		loadingOn();
		$http({ method: 'GET', url: URL_API_CONSULTA_CEP + 'cidade/6' })
			.then(
				(response) => $scope.listaCidades = response.data,
				(error) => alert(error.data.message)
			)
			.finally(() => loadingOff());

	}

	//---------------
	
	$scope.cancel = () => {
		$scope.state = "search";
		$scope.cliente = {};
		$scope.clienteRef = {};

	}

	$scope.preparaCadastrar = () => {
		$scope.state = "insert";

	}

	$scope.preparaAlterar = (item) => {
		$scope.state = "update";
		$scope.cliente = angular.copy(item);
		
	}

	$scope.excluir = () => {

	}

	const validar = () => {

		if ($scope.isEmty($scope.cliente.nome_razao)) {
			alert('Campo Razão Social obrigatório!');
			return false;
		}
		if ($scope.isEmty($scope.cliente.comprador)) {
			alert('Campo Comprador obrigatório!');
			return false;
		}
		if ($scope.isEmty($scope.cliente.cnpj)) {
			alert('Campo CNPJ obrigatório!');
			return false;
		}

		return true;

	}
	
	$scope.cadastrar = () => {

		if(!validar()) return false;
		
		loadingOn();
		$http({method: 'POST',url: URL_API+'cliente',data: $scope.cliente})
			.then((response) => {
				
				alert("Pedido cadastrado com sucesso. Número " + response.data.id);
				$scope.listaClientes.push(response.data);
				$scope.cancel();
				
				
			}, (error) => alert(error.data.message))
			.finally(() => loadingOff());
		
	}

	$scope.alterar = () => {

		if (!validar()) return false;

		loadingOn();
		$http({ method: 'PUT', url: URL_API + 'cliente/' + $scope.cliente.id, data: $scope.cliente })
			.then((response) => {

				alert("Pedido alterado com sucesso.");
				$scope.cancel();
				$scope.getListaClientes();


			}, (error) => alert(error.data.message))
			.finally(() => loadingOff());

	}

	$scope.getListaClientes = () => {

		loadingOn();
		$http({ method: 'GET', url: URL_API + 'cliente'})
			.then(
				(response) => $scope.listaClientes = response.data,
				(error) => alert(error.data.message)
			)
			.finally(() => loadingOff());

	}
	 
			
  }]);

  