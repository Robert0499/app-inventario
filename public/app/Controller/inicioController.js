angular.module('inventario').controller('inicioController', inicioController);
inicioController.$inject = ['$scope', '$state', 'host', 'inicioService'];
function inicioController($scope, $state, host, inicioService) {
  $scope.login = () => {
    // console.log($scope.user);
    inicioService
      .Login($scope.user)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };
}
