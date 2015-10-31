(function() {
  'use strict';

  /**
   * Initialization of firebaseDemo.core module.
   *
   * @namespace Modules
   */
  angular
    .module('firebaseDemo.core', [
      'ngAnimate', 'ngMaterial', 'ngMessages', 'ngSanitize',
      'ui.router',
      'firebase', 'toastr',
      'firebase-demo-templates',
      'blocks.exception', 'blocks.logger', 'blocks.router'
    ]);
})();
