(function() {
  'use strict';

  /**
   * Specify run block for firebaseDemo.about module.
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.about')
    .run(moduleRun)
  ;

  /**
   * @desc      Run block for firebaseDemo.about module.
   * @namespace About
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
   * @desc      Getter method for firebaseDemo.about module route definitions.
   * @memberOf  Routes.About
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: 'about',
        config: {
          url: '/',
          parent: 'firebaseDemo',
          title: 'About',
          containerClass: 'about-container',
          views: {
            'content@': {
              templateUrl: '/firebase-demo/about/about.html',
              controller: 'AboutController',
              controllerAs: 'vm'
            }
          }
        }
      }
    ];
  }
})();
