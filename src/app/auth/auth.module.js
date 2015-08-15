(function() {
  'use strict';

  /**
   * Module initialization
   *
   * @namespace Modules
   */
  angular
    .module('firebaseDemo.auth', [
      'firebaseDemo.auth.login',
      'firebaseDemo.auth.services'
    ])
  ;
})();
