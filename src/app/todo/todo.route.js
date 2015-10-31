(function() {
  'use strict';

  /**
   * Specify run block for firebaseDemo.todo module.
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.todo')
    .run(moduleRun)
  ;

  /**
   * @desc      Run block for firebaseDemo.todo module.
   * @namespace Todo
   * @memberOf  Routes
   * @ngInject
   *
   * @param {Providers.RouterHelper}  routerHelper
   */
  function moduleRun(routerHelper) {
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

  /**
   * @name      _todos
   * @desc      '_todos' resolve implementation.
   * @memberOf  Routes.Todo
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {AngularFireAuth}         Auth
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
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
