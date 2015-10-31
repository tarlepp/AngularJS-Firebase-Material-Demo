(function() {
  'use strict';

  /**
   * Exception factory.
   *
   * @namespace Factories
   */
  angular
    .module('blocks.exception')
    .factory('exception', exception)
  ;

  /**
   * @desc      Application wide exception handler.
   * @namespace Exception
   * @memberOf  Factories
   * @ngInject
   *
   * @param   {Factories.Logger}  logger
   * @returns {{
   *  catcher: Factories.Exception.catcher
   * }}
   */
  function exception(logger) {
    return {
      catcher: catcher
    };

    ////////////////////

    /**
     * @name      catcher
     * @desc      Catcher method for exception factory.
     * @memberOf  Factories.Exception
     *
     * @param   {string}  message
     * @returns {function}
     */
    function catcher(message) {
      return function(reason) {
        logger.error(message, reason);
      };
    }
  }
})();
