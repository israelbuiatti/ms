'use strict';

angular.module('admin').controller('ClienteCtrl', ["$scope", "$http", function ($scope, $http) {

	this.$onInit = () => {
		$scope.cliente = {};
		$scope.getEstados();
		$scope.getCidades();
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
				$scope.cliente = {};
				
				
			}, (error) => alert(error.data.message))
			.finally(() => loadingOff());
		
	}
	 
			
  }]);

  