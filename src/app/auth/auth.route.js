(function() {
  'use strict';

  /**
   * Specify run block for firebaseDemo.auth module.
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.auth')
    .run(moduleRun)
  ;

  /**
   * @desc      Run block for firebaseDemo.auth module.
   * @namespace Auth
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
   * @desc      Getter method for firebaseDemo.auth module route definitions.
   * @memberOf  Routes.Auth
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: 'auth',
        config: {
          abstract: true,
          parent: 'firebaseDemo'
        }
      }
    ];
  }
})();
