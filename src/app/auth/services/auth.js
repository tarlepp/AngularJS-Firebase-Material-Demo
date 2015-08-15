(function() {
  'use strict';

  /**
   * Auth factory.
   *
   * @namespace Factories
   */
  angular
    .module('firebaseDemo.auth.services')
    .factory('Auth', Auth)
  ;

  /**
   * @desc      Service class to return a firebaseAuth service to configured Firebase instance.
   * @namespace Auth
   * @memberOf  Factories
   * @ngInject
   *
   * @param   {Factories.Dataservice}   dataservice
   * @param   {AngularFireAuthService}  $firebaseAuth
   * @returns {AngularFireAuth}
   * @constructor
   */
  function Auth(dataservice, $firebaseAuth) {
    return $firebaseAuth(dataservice.getReference());
  }
})();
