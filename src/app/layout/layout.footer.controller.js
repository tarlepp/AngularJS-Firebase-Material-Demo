(function() {
  'use strict';

  /**
   * Specify controller for module
   *
   * @namespace Controllers
   */
  angular
    .module('firebaseDemo.layout')
    .controller('FooterController', FooterController)
  ;

  /**
   * @desc      Controller implementation.
   * @namespace Layout
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function FooterController() {}
})();
