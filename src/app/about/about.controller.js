(function() {
  'use strict';

  /**
   * Specify controller for module
   *
   * @namespace Controllers
   */
  angular
    .module('firebaseDemo.about')
    .controller('AboutController', AboutController)
  ;

  /**
   * @desc      Actual controller.
   * @namespace About
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function AboutController() {}
})();
