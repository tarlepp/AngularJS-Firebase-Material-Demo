(function() {
  'use strict';

  /**
   * Specify provider blocks.router module
   *
   * @namespace Providers
   */
  angular
    .module('blocks.router')
    .provider('routerHelper', routerHelperProvider)
  ;

  /**
   * @desc      Implementation for RouterHelperProvider to help configure the state-base ui.router
   * @namespace RouterHelperProvider
   * @memberOf  Providers
   * @ngInject
   *
   * @param {$locationProvider}             $locationProvider
   * @param {ng.ui.IStateProvider}          $stateProvider
   * @param {angular.ui.IUrlRouterProvider} $urlRouterProvider
   */
  function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    var _this = this;

    // Default config for routerHelper
    var config = {
      docTitle: undefined,
      resolveAlways: {}
    };

    // We want to use HTML5 mode with routing
    $locationProvider.html5Mode(true);

    // Specify configure method
    _this.configure = function configure(configOverride) {
      angular.extend(config, configOverride);
    };

    // Getter for provider service
    _this.$get = routerHelper;

    /**
     * @desc      routerHelper service.
     * @namespace RouterHelper
     * @memberOf  Providers
     * @ngInject
     *
     * @param   {$location}                             $location
     * @param   {ng.IRootScopeService|{title: string}}  $rootScope
     * @param   {ui.router.state.$state}                $state
     * @param   {Factories.Logger}                      logger
     * @returns {{
     *    configureStates: Providers.RouterHelper.configureStates,
     *    getStates: Providers.RouterHelper.getStates,
     *    stateCounts: {
     *      errors: number,
     *      changes: number
     *    }
     *  }}
     * @constructor
     */
    function routerHelper(
      $location, $rootScope, $state,
      logger
    ) {
      // Initialize used default variables
      var handlingStateChangeError = false;
      var hasOtherwise = false;
      var stateCounts = {
        errors: 0,
        changes: 0
      };

      // Specify service methods
      var service = {
        configureStates: configureStates,
        getStates: getStates,
        stateCounts: stateCounts
      };

      // Initialize service
      _init();

      return service;

      ////////////////////

      /**
       * @name      configureStates
       * @desc      Implementation for configureStates method.
       * @memberOf  Providers.RouterHelper
       *
       * @param {object[]}  states
       * @param {string}    [otherwisePath]
       */
      function configureStates(states, otherwisePath) {
        // Iterate specified states, add resolves to each one and attach state to router
        states.forEach(stateIterator);

        // Set otherwise path
        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;

          $urlRouterProvider.otherwise(otherwisePath);
        }

        /**
         * State iterator helper function.
         *
         * @param {*}  state
         */
        function stateIterator(state) {
          state.config.resolve = angular.extend(state.config.resolve || {}, config.resolveAlways);

          $stateProvider.state(state.state, state.config);
        }
      }

      /**
       * @name      getStates
       * @desc      Implementation for getStates method.
       * @memberOf  Providers.RouterHelper
       */
      function getStates() {
        return $state.get();
      }

      //////////////////// Private functions for service

      /**
       * Service initialize method. This will activate state change error listener and updates current page title to
       * match with state.
       *
       * @private
       */
      function _init() {
        _handleRoutingErrors();
        _updateDocumentTitle();
      }

      /**
       * Route cancellation:
       *  1) On routing error, go to the default location (/).
       *  2) Provide an exit clause if it tries to do it twice.
       *
       * @private
       */
      function _handleRoutingErrors() {
        $rootScope.$on('$stateChangeError', onEvent);

        //noinspection JSUnusedLocalSymbols

        /**
         * Callback for $stateChangeError event.
         *
         * @param {object}        event
         * @param {IState}        toState
         * @param {object}        toParams
         * @param {IState}        fromState
         * @param {object}        fromParams
         * @param {Error|string}  error
         */
        function onEvent(event, toState, toParams, fromState, fromParams, error) {
          // Oh noes error is already activated
          if (handlingStateChangeError) {
            return;
          }

          stateCounts.errors++;
          handlingStateChangeError = true;

          // State requires authenticated user.
          if (error === 'AUTH_REQUIRED') {
            $state.go('auth.login');

            logger.error('Login required');
          } else { // Otherwise show error message and redirect user to root (/)
            var message = _getErrorMessage(error, toState);

            logger.warning(message, toState);

            $location.path('/');
          }
        }
      }

      /**
       * Method that will update current document title to match with state specification.
       *
       * @private
       */
      function _updateDocumentTitle() {
        $rootScope.$on('$stateChangeSuccess', onEvent);

        //noinspection JSUnusedLocalSymbols

        /**
         * Callback for $stateChangeSuccess event.
         *
         * @param {object}                  event
         * @param {IState|{title: string}}  toState
         * @param {object}                  toParams
         * @param {IState}                  fromState
         * @param {object}                  fromParams
         * @param {Error}                   error
         */
        function onEvent(event, toState, toParams, fromState, fromParams, error) {
          stateCounts.changes++;
          handlingStateChangeError = false;

          // data bind to <title>
          $rootScope.title = config.docTitle + ' ' + (toState.title || '');
        }
      }

      /**
       * Method to determine error message that is shown to user if router error happens.
       *
       * @param   {object}  error
       * @param   {IState}  toState
       * @returns {string}
       * @private
       */
      function _getErrorMessage(error, toState) {
        var destination = _getDestination(toState);

        return 'Error routing to ' + destination + '. ' +
          (error.data || '') + '. <br />' + (error.statusText || '') +
          ': ' + (error.status || '')
        ;
      }

      /**
       * Method to get toState destination name.
       *
       * @param   {IState|{title: string, name: string, loadedTemplateUrl: string}}  toState
       * @returns {*|string}
       * @private
       */
      function _getDestination(toState) {
        return (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) || 'unknown target';
      }
    }
  }
})();
