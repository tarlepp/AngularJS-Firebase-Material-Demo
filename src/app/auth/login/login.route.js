(function() {
  'use strict';

  /**
   * Specify run block for firebaseDemo.auth.login module.
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.auth.login')
    .run(moduleRun)
  ;

  /**
   * @desc      Run block for firebaseDemo.auth.login module.
   * @namespace Auth.Login
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
   * @desc      Getter method for firebaseDemo.auth.login module route definitions.
   * @memberOf  Routes.Auth.Login
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: 'auth.login',
        config: {
          url: '/login',
          title: 'Login',
          containerClass: 'login-container',
          views: {
            'content@': {
              templateUrl: '/firebase-demo/auth/login/login.html',
              controller: 'LoginController',
              controllerAs: 'vm',
              resolve: {
                _user: _user
              }
            }
          }
        }
      }
    ];
  }

  /**
   * @name      _user
   * @desc      '_user' resolve implementation.
   * @memberOf  Routes.Auth.Login
   * @ngInject
   *
   * @param   {AngularFireAuth} Auth
   * @returns {ng.IPromise<any>|*}
   * @private
   */
  function _user(Auth) {
    return Auth.$waitForAuth();
  }
})();
