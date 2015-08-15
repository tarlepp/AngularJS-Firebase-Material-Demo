(function() {
  'use strict';

  /**
   * Specify run block for module
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.layout')
    .run(appRun)
  ;

  /**
   * @desc      Actual run block.
   * @namespace Layout
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
   * @memberOf  Routes.Layout
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: 'firebaseDemo',
        config: {
          abstract: true,
          views: {
            header: {
              templateUrl: '/firebase-demo/layout/header.html',
              controller: 'HeaderController',
              controllerAs: 'vm'
            },
            footer: {
              templateUrl: '/firebase-demo/layout/footer.html',
              controller: 'FooterController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
