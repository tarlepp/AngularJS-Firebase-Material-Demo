(function() {
  'use strict';

  /**
   * Initialization of firebaseDemo.auth module.
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
