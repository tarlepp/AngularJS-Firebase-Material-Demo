(function() {
  'use strict';

  // Specify run block for module
  angular
    .module('firebaseDemo.todo')
    .run(appRun)
  ;

  // Run block dependencies
  appRun.$inject = ['routerHelper'];

  /**
   * Actual run block.
   *
   * @param {routerHelper}  routerHelper
   * @constructor
   * @ngInject
   */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  // Getter method for module route definitions
  function getStates() {
    return [
      {
        state: 'todo',
        config: {
          url: '/todo',
          parent: 'firebaseDemo',
          title: 'Todo',
          containerClass: 'todo-container',
          views: {
            'content@': {
              templateUrl: '/firebase-demo/todo/todo.html',
              controller: 'TodoController',
              controllerAs: 'vm',
              resolve: {
                _todos: _todos
              }
            }
          }
        }
      }
    ];
  }

  // '_todo' resolve dependencies
  _todos.$inject = ['$firebaseArray', 'Auth', 'dataservice'];

  /**
   * '_todo' resolve function.
   *
   * @param   {AngularFireArray}  $firebaseArray
   * @param   {AngularFireAuth}   Auth
   * @param   {dataservice}       dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   * @ngInject
   */
  function _todos($firebaseArray, Auth, dataservice) {
    return Auth
      .$requireAuth()
      .then(getItems)
    ;

    function getItems(user) {
      return $firebaseArray(dataservice.getReference('todos/' + user.auth.uid));
    }
  }
})();
