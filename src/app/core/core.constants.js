/* global moment:false, Firebase: false */
(function() {
  'use strict';

  /**
   * Specify core constant values
   *
   * @namespace Constants
   * @memberOf  Core
   */
  angular
    .module('firebaseDemo.core')
    .constant('moment', moment)
    .constant('Firebase', Firebase)
  ;
})();
