(function() {
  'use strict';

  /**
   * Specify run block for module
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.auth')
    .run(appRun)
  ;

  /**
   * @desc      Actual run block.
   * @namespace Auth
   * @memberOf  Routes
   * @ngInject
   *
   * @param {Providers.RouterHelper}  routerHelper
   */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  /**
   * @name      getStates
   * @desc      Getter method for module route definitions.
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
