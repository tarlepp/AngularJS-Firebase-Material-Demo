(function() {
  'use strict';

  /**
   * Module initialization
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
