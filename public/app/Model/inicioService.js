angular.module('inventario').service('inicioService', inicioService);
inicioService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function inicioService($http, host, $httpParamSerializerJQLike) {
  this.Login = data => {
    return $http.post(host + 'auth', $httpParamSerializerJQLike(data));
  };
}
