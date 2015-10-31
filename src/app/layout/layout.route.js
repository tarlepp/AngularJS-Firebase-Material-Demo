(function() {
  'use strict';

  /**
   * Specify run block for firebaseDemo.layout module.
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.layout')
    .run(moduleRun)
  ;

  /**
   * @desc      Run block for firebaseDemo.layout module.
   * @namespace Layout
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
