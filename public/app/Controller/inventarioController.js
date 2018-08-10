angular
  .module('inventario')
  .controller('inventarioController', inventarioController);
inventarioController.$inject = ['$scope', '$state', 'host'];
function inventarioController($scope, $state, host) {
	$scope.reportes = () =>{
		$state.go('reportes');
	}
}
