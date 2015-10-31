(function() {
  'use strict';

  /**
   * Logger factory.
   *
   * @namespace Factories
   */
  angular
    .module('blocks.logger')
    .factory('logger', logger)
  ;

  /**
   * @desc      Application wide logger handler.
   * @namespace Logger
   * @memberOf  Factories
   * @ngInject
   *
   * @param {$log}      $log
   * @param {$injector} $injector
   * @returns {{
   *    error:    Factories.Logger.error,
   *    info:     Factories.Logger.info,
   *    success:  Factories.Logger.success,
   *    warning:  Factories.Logger.warning,
   *    log:      Factories.Logger.log
   *  }}
   */
  function logger($log, $injector) {
    return {
      // toastr implementations
      error: error,
      info: info,
      success: success,
      warning: warning,

      // straight to console; bypass toastr
      log: log
    };

    ////////////////////

    /**
     * @name      error
     * @desc      Error method for logger factory.
     * @memberOf  Factories.Logger
     *
     * @param {string}  message
     * @param {object}  [data]
     * @param {string}  [title]
     */
    function error(message, data, title) {
      data = data || {};
      title = title || '';

      $injector.get('toastr').error(message, title);

      $log.error('Error: ' + message, data);
    }

    /**
     * @name      info
     * @desc      Info method for logger factory.
     * @memberOf  Factories.Logger
     *
     * @param {string}  message
     * @param {object}  [data]
     * @param {string}  [title]
     */
    function info(message, data, title) {
      data = data || {};
      title = title || '';

      $injector.get('toastr').info(message, title);

      $log.info('Info: ' + message, data);
    }

    /**
     * @name      success
     * @desc      Success method for logger factory.
     * @memberOf  Factories.Logger
     *
     * @param {string}  message
     * @param {object}  [data]
     * @param {string}  [title]
     */
    function success(message, data, title) {
      data = data || {};
      title = title || '';

      $injector.get('toastr').success(message, title);

      $log.info('Success: ' + message, data);
    }

    /**
     * @name      warning
     * @desc      Warning method for logger factory.
     * @memberOf  Factories.Logger
     *
     * @param {string}  message
     * @param {object}  [data]
     * @param {string}  [title]
     */
    function warning(message, data, title) {
      data = data || {};
      title = title || '';

      $injector.get('toastr').warning(message, title);

      $log.warn('Warning: ' + message, data, title);
    }

  /**
   * @name      log
   * @desc      Default log function.
   * @memberOf  Factories.Logger
   */
    function log() {
      $log.log(arguments);
    }
  }
}());
