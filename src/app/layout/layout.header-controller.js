(function() {
  'use strict';

  /**
   * Specify controller for firebaseDemo.layout module.
   *
   * @namespace Controllers
   */
  angular
    .module('firebaseDemo.layout')
    .controller('HeaderController', HeaderController)
  ;

  /**
   * @desc      Controller implementation.
   * @namespace Layout
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {ui.router.state.$state}  $state
   * @param {AngularFireAuth}         Auth
   * @constructor
   * @ngInject
   */
  function HeaderController(
    $state,
    Auth
  ) {
    var vm = this;

    // Initialize user object
    vm.user = {};

    /**
     * Method to get provider class for currently authenticated user.
     *
     * @param   {string}  provider
     * @returns {string}
     */
    vm.getProviderClass = function getProviderClass(provider) {
      var output = '';

      switch (provider) {
        case 'facebook':
          output = 'mdi-facebook-box';
          break;
        case 'twitter':
          output = 'mdi-twitter-box';
          break;
        case 'github':
          output = 'mdi-github-box';
          break;
        case 'google':
          output = 'mdi-google-plus-box';
          break;
      }

      return output;
    };

    /**
     * Method to make logout action.
     *
     * @param {Event} $event
     */
    vm.logout = function logout($event) {
      $event.preventDefault();
      $event.stopPropagation();

      Auth.$unauth();

      $state.go('about');
    };

    // Watcher for auth status
    Auth.$onAuth(function onAuth(user) {
      vm.user = user;
    });
  }
})();
