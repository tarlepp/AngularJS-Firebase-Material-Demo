(function() {
  'use strict';

  /**
   * Specify controller for firebaseDemo.auth.login module.
   *
   * @namespace Controllers
   */
  angular
    .module('firebaseDemo.auth.login')
    .controller('LoginController', LoginController)
  ;

  /**
   * @desc      Controller implementation for /login route.
   * @namespace Login
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {ui.router.state.$state}  $state
   * @param {Factories.Dataservice}   dataservice
   * @param {Factories.Logger}        logger
   * @param {object|undefined}        _user
   * @constructor
   */
  function LoginController(
    $state,
    dataservice, logger,
    _user
  ) {
    var vm = this;

    // User has already logged in, so redirect to proper page
    if (_user) {
      $state.go('todo');
    }

    /**
     * Method to make actual login via specified provider to Firebase backend.
     *
     * @param {string}  provider  Name of the used provider, this is one of following:
     *                              - facebook
     *                              - twitter
     *                              - github
     *                              - google
     */
    vm.login = function(provider) {
      var ref = dataservice.getReference();

      /**
       * Login callback function which handles possible login errors and redirection if all is ok.
       *
       * @param {object}  error
       * @param {object}  authData
       */
      var callback = function(error, authData) {
        if (error) {
          logger.error('Login Failed!', error);
        } else {
          logger.log('auth data', authData);
          logger.success('Login successfully!');

          $state.go('todo');
        }
      };

      // Specify used options for Firebase auth
      var options = {
        remember: 'sessionOnly',
        scope: (provider !== 'github') ? 'email' : 'user:email'
      };

      // And make actual user authentication
      ref.authWithOAuthPopup(provider, callback, options);
    };
  }
}());
