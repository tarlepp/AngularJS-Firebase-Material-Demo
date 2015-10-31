// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
(function() {
  'use strict';

  /**
   * Specify provider and configure it for blocks.exception module
   *
   * @namespace Providers
   */
  angular
    .module('blocks.exception')
    .provider('exceptionHandler', exceptionHandlerProvider)
    .config(moduleConfig)
  ;

  /**
   * @desc      Must configure the exception handling.
   * @namespace ExceptionHandler
   * @memberOf  Providers
   */
  function exceptionHandlerProvider() {
    /* jshint validthis:true */
    this.config = {
      appErrorPrefix: undefined
    };

    this.configure = function configure(appErrorPrefix) {
      this.config.appErrorPrefix = appErrorPrefix;
    };

    this.$get = function $get() {
      return {config: this.config};
    };
  }

  /**
   * @desc      Configure by setting an optional string value for appErrorPrefix. Accessible via config.appErrorPrefix
   *            (via config value).
   * @namespace ExceptionHandler
   * @memberOf  Providers
   * @ngInject
   *
   * @param  {$provide} $provide
   */
  function moduleConfig($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  /**
   * @desc      Extend the $exceptionHandler service to also display a toast.
   * @namespace ExceptionHandler
   * @memberOf  Providers
   * @ngInject
   *
   * @param  {$delegate|*}                $delegate
   * @param  {Providers.ExceptionHandler} exceptionHandler
   * @param  {Factories.Logger}           logger
   * @return {function}                   the decorated $exceptionHandler service
   */
  function extendExceptionHandler($delegate, exceptionHandler, logger) {
    return function(exception, cause) {
      var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
      var errorData = {
        exception: exception,
        cause: cause
      };

      // Create exception message
      exception.message = appErrorPrefix + exception.message;

      $delegate(exception, cause);

      /**
       * Could add the error to a service's collection, add errors to $rootScope, log errors to remote web server,
       * or log locally. Or throw hard. It is entirely up to you. throw exception;
       *
       * @example
       *  throw { message: 'error message we added' };
       */
      logger.error(exception.message, errorData);
    };
  }
})();
