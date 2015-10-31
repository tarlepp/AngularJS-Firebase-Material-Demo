(function() {
  'use strict';

  /**
   * Dataservice factory.
   *
   * @namespace Factories
   */
  angular
    .module('firebaseDemo.core')
    .factory('dataservice', dataservice)
  ;

  /**
   * @desc Application wide dataservice.
   * @namespace Dataservice
   * @memberOf Factories
   * @ngInject
   *
   * @param   {Firebase}  Firebase
   * @param   {object}    config
   * @returns {{
   *    getReference: Factories.Dataservice.getReference
   *  }}
   */
  function dataservice(Firebase, config) {
    return {
      getReference: getReference
    };

    ////////////////////

    /**
     * @name getReference
     * @desc Getter method for Firebase reference.
     * @memberOf Factories.Dataservice
     *
     * @param   {string}  [identifier]
     * @returns {Firebase}
     */
    function getReference(identifier) {
      identifier = identifier || '';

      return new Firebase(config.firebaseUrl + identifier);
    }
  }
})();
