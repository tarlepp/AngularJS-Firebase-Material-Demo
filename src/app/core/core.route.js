(function() {
  'use strict';

  /**
   * Specify run block for module
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.core')
    .run(appRun)
  ;

  /**
   * @desc      Actual run block.
   * @namespace Core
   * @memberOf  Routes
   * @ngInject
   *
   * @param {ng.IRootScopeService|{containerClass: string}} $rootScope
   * @param {Providers.RouterHelper}                        routerHelper
   * @constructor
   */
  function appRun(
    $rootScope,
    routerHelper
  ) {
    // Set default state to be 404 page
    routerHelper.configureStates(getStates(), '/404');

    // Add success handler for route change
    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

    //noinspection JSUnusedLocalSymbols
    /**
     * Success state change helper function
     *
     * @param {object}                          event
     * @param {IState|{containerClass: string}} toState
     * @param {object}                          toParams
     * @param {IState|{containerClass: string}} fromState
     * @param {object}                          fromParams
     */
    function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
      $rootScope.containerClass = toState.containerClass;
    }
  }

  /**
   * @name      getStates
   * @desc      Getter method for module route definitions.
   * @memberOf  Routes.Core
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: '404',
        config: {
          url: '/404',
          title: '404',
          parent: 'firebaseDemo',
          views: {
            'content@': {
              templateUrl: '/firebase-demo/core/404.html'
            }
          }
        }
      }
    ];
  }
})();
