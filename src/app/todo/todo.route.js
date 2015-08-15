(function() {
  'use strict';

  // Specify run block for module
  angular
    .module('firebaseDemo.todo')
    .run(appRun)
  ;

  /**
   * @desc      Actual run block.
   * @namespace Todo
   * @memberOf  Routes
   * @ngInject
   *
   * @param {Providers.RouterHelper}  routerHelper
   * @constructor
   */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  /**
   * @name      getStates
   * @desc      Getter method for module route definitions.
   * @memberOf  Routes.Todo
   *
   * @returns {*[]}
   */
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
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {AngularFireAuth}         Auth
   * @param   {Factories.Dataservice}   dataservice
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
