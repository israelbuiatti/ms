'use strict';

angular.module('admin').controller('PedidoCtrl', ["$scope", "$http", function ($scope, $http) {


	$scope.novo = function() {
		$scope.pedido = {};
		$scope.pedido.pedido = ID;
		$scope.fornecedor = {};
		$scope.baixa = {};
		$scope.pItem = {};
		$scope.produto = {};
		$scope.cliente = {};
		$scope.itens = [];
		$scope.pedidoItem = false;
		$('#datetimepicker4').val('');
	}
	$scope.novo();
	
	$http({method: 'GET',url: URL_API+'/fornecedor'}).then(function successCallback(response) {
		$scope.listaFornecedor=response.data;
		
		loadingOff();
	}, function errorCallback(response) {
		console.log('Ocorreu um erro!');
	});
	
	$http({method: 'GET',url: URL_API+'/vendedor'}).then(function successCallback(response) {
		$scope.listaVendedor=response.data;
		
		
		loadingOff();
	}, function errorCallback(response) {
		console.log('Ocorreu um erro!');
	});
	
	$http({method: 'GET',url: URL_API+'/vendedor'}).then(function successCallback(response) {
		$scope.listaTelemarketing=response.data;
		
		loadingOff();
	}, function errorCallback(response) {
		console.log('Ocorreu um erro!');
	});
	
	
	
	$scope.pesquisar = function (search) {
		
		if (search.length > 3) {
			loadingOn();
			$http({method: 'GET',url: URL_API+'services/cliente/search/'+search}).then(function successCallback(response) {
				$scope.clientes=response.data;
				
				loadingOff();
			}, function errorCallback(response) {
				console.log('Ocorreu um erro!');
			});
		}
		
	}
	
	$scope.pesquisarPedido = function () {
		
		loadingOn();
		$http({method: 'GET',url: URL_API+'services/pedido/'+$scope.pedido.pedido}).then(function successCallback(response) {
			
			if (response.data) {
				console.log(response.data);
				$scope.pedido = response.data;
				
				var data = $scope.pedido.data.split("-");
				$scope.pedido.data = data[2]+"/"+data[1]+"/"+data[0]
				$('#datetimepicker4').val($scope.pedido.data);
				
				if ($scope.pedido.data_baixado != null) {
					var data = $scope.pedido.data_baixado.split("-");
					$scope.pedido.data_baixado = data[2]+"/"+data[1]+"/"+data[0]
					$('#datetimepicker5').val($scope.pedido.data_baixado);
				}
				
				$scope.carregaFornecedor();
				
				$scope.pesquisarPedidoItem();
				
			}
			else {
				loadingOff();
			}

			}, function errorCallback(response) {
			console.log('Ocorreu um erro!');
		});
		
	}
	
	$scope.selecionar = function(cliente) {
		$scope.cliente = cliente;
		$scope.pedido.cliente = cliente.id;
		$scope.pedido.razao = cliente.razao;
		$scope.search = "";
	}
	
	$scope.cadastrar = function() {
		$scope.pedido.data = $('#datetimepicker4').val();
		console.log($scope.pedido);
		if ($scope.pedido.pedido == undefined || $scope.pedido.pedido == '') {
			alert('Campo pedido obrigatório!');
			return;
		}
		if ($scope.pedido.data == undefined || $scope.pedido.data == '') {
			alert('Campo data obrigatório!');
			return;
		}
		if ($scope.pedido.fornecedor == undefined || $scope.pedido.fornecedor == '') {
			alert('Campo fornecedor obrigatório!');
			return;
		}
		if ($scope.cliente == undefined || $scope.cliente.id == undefined || $scope.cliente.id == '') {
			alert('Campo cliente obrigatório!');
			return;
		}
		
		
		if ($scope.pedido.vendedor == undefined || $scope.pedido.vendedor == '') {
			alert('Campo vendedor obrigatório!');
			return;
		}
		if ($scope.pedido.prazo == undefined || $scope.pedido.prazo == '') {
			alert('Campo prazo obrigatório!');
			return;
		}
		if ($scope.pedido.tipopag == undefined || $scope.pedido.tipopag == '') {
			alert('Campo tipo pagamento obrigatório!');
			return;
		}
		
		
		loadingOn();
		$http({method: 'POST',url: URL_API+'services/pedido',data: {pedidox:$scope.pedido}}).then(function successCallback(response) {
			
			
			
			if (response.data.erro) {
				alert(response.data.msg);		
			}
			else {
				alert("Pedido cadastrado com sucesso. Número " + response.data.id);
				$scope.pedidoItem = true;
			}
			
			loadingOff();
		}, function errorCallback(response) {
			console.log('Ocorreu um erro!');
		});
		
	};
	
	 
	 
	 $scope.selecionarProduto = function(produto) {
		$scope.produto = produto;
		$scope.pItem.produto = produto.id;
		$scope.pItem.nome = produto.nome;
		$scope.search = "";
	}
	
		
	$scope.pesquisarProduto = function (search) {
		
		if (search.length > 2) {
			loadingOn();
			$http({method: 'GET',url: URL_API+'services/produto/search/'+search}).then(function successCallback(response) {
				$scope.produtos=response.data;
				
				loadingOff();
			}, function errorCallback(response) {
				console.log('Ocorreu um erro!');
			});
		}
		
	}
	var contains  = function contains(a, obj) {
		for (var i = 0; i < a.length; i++) {
			if (a[i]['produto'] == obj['produto']) {
				return true;
			}
		}
		return false;
	}

	$scope.adicionarItem = function() {

		if ($scope.produto == undefined || $scope.produto.id == undefined || $scope.produto.id == '') {
			alert('Campo produto obrigatório!');
			return;
		}
		
		if ($scope.pItem.quantidade == undefined || $scope.pItem.quantidade == '') {
			alert('Campo quantidade obrigatório!');
			return;
		}
		if ($scope.pItem.preco == undefined || $scope.pItem.preco == '') {
			alert('Campo preco obrigatório!');
			return;
		}
		
		
		$scope.pItem.pedido = $scope.pedido.pedido;
		
		if (!contains($scope.itens,$scope.pItem)) {
			
			loadingOn();
			$http({method: 'POST',url: URL_API+'services/pedidoItem',data: {pItemx:$scope.pItem}}).then(function successCallback(response) {
				//alert('Produto adicionado!');
				$scope.itens.push(response.data);
				$scope.produto = {};
				$scope.pItem = {};
				loadingOff();
			}, function errorCallback(response) {
				console.log('Ocorreu um erro!');
			});

		}
		else {
			alert('Erro! Produto já inserido!');
			$scope.produto = {};
			$scope.pItem = {};
		}
		
	}
	
	$scope.carregaFornecedor = function() {
		$http({method: 'GET',url: URL_API+'services/fornecedor/'+$scope.pedido.fornecedor}).then(function successCallback(response) {
			$scope.fornecedor = response.data;
			
			//$scope.fornecedor.comissao_vend = ($scope.fornecedor.comissao_vend*100)+'%';
			
		}, function errorCallback(response) {
			console.log('Ocorreu um erro!');
		});
	}
	
	$scope.baixar = function() {
		$scope.pedido.data_baixado = $('#datetimepicker5').val();
		if ($scope.pedido.nf_baixado == undefined || $scope.pedido.nf_baixado == '') {
			alert('Campo NF obrigatório!');
			return;
		}
		if ($scope.pedido.data_baixado == undefined || $scope.pedido.data_baixado== '') {
			alert('Campo Data obrigatório!');
			return;
		}
		if ($scope.pedido.valor_baixado == undefined || $scope.pedido.valor_baixado == '') {
			alert('Campo Valor obrigatório!');
			return;
		}
				
		loadingOn();
		$http({method: 'POST',url: URL_API+'services/baixa',data: {pedidox:$scope.pedido}}).then(function successCallback(response) {
			alert('Pedido baixado com sucesso!');
			$scope.pItem = {};
			loadingOff();
		}, function errorCallback(response) {
			console.log('Ocorreu um erro!');
		});
		
	}
	
	$scope.excluir = function(item) {
		
		if (!confirm("Confirma exclusão?")) {
			return;
		}
		
		loadingOn();
		$http({method: 'DELETE',url: URL_API+'services/pedidoItem/'+item.pedido+'/'+item.produto}).then(function successCallback(response) {
			$scope.pesquisarPedidoItem();
			loadingOff();
		}, function errorCallback(response) {
			console.log('Ocorreu um erro!');
		});
	};
	
	$scope.pesquisarPedidoItem = function () {
		$http({method: 'GET',url: URL_API+'services/pedidoItem/'+$scope.pedido.pedido}).then(function successCallback(response) {
			if (response.data) {
				console.log(response.data);
				$scope.pedidoItem = true;
				$scope.itens = response.data;
			}
			loadingOff();
		}, function errorCallback(response) {
			console.log('Ocorreu um erro!');
		});
	}

	

			
  }]);

  