angular.module('inventario').constant('state', (stateprovider, name) => {
  stateprovider.state(name, {
    url: '/' + name,
    controller: name + 'Controller',
    templateUrl: 'app/View/' + name + '.html',
    resolve: {
      loadMyCtrl: [
        '$ocLazyLoad',
        $ocLazyLoad => {
          return $ocLazyLoad.load([
            {
              files: [
                'app/Controller/' + name + 'Controller.js',
                'app/css/' + name + 'Style.css',
                'app/Model/' + name + 'Service.js'
              ]
            }
          ]);
        }
      ]
    }
  });
});
angular
  .module('inventario')
  .constant('host', 'http://10.72.138.86:8000/api/');
