(function() {
  'use strict';

  /**
   * Specify controller for firebaseDemo.about module.
   *
   * @namespace Controllers
   */
  angular
    .module('firebaseDemo.about')
    .controller('AboutController', AboutController)
  ;

  /**
   * @desc      Controller implementation for /about route.
   * @namespace About
   * @memberOf  Controllers
   * @ngInject
   *
   * @constructor
   */
  function AboutController() {}
})();
