(function() {
  'use strict';

  angular
    .module('firebaseDemo', [
      'firebaseDemo.about',
      'firebaseDemo.auth',
      'firebaseDemo.chat',
      'firebaseDemo.config',
      'firebaseDemo.core',
      'firebaseDemo.layout',
      'firebaseDemo.todo'
    ])
  ;
})();
