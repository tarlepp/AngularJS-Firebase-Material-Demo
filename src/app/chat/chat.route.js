(function() {
  'use strict';

  /**
   * Specify run block for module
   *
   * @namespace Routes
   */
  angular
    .module('firebaseDemo.chat')
    .run(appRun)
  ;

  /**
   * @desc      Actual run block.
   * @namespace Chat
   * @memberOf  Routes
   * @ngInject
   *
   * @param {Providers.RouterHelper}  routerHelper
   */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  /**
   * @name      getStates
   * @desc      Getter method for module route definitions.
   * @memberOf  Routes.Chat
   *
   * @returns {*[]}
   */
  function getStates() {
    return [
      {
        state: 'chat',
        config: {
          url: '/chat',
          parent: 'firebaseDemo',
          title: 'Chat',
          containerClass: 'chat-container',
          views: {
            'content@': {
              templateUrl: '/firebase-demo/chat/chat.html',
              controller: 'ChatController',
              controllerAs: 'vm',
              resolve: {
                _user: _user,
                _messages: _messages
              }
            }
          }
        }
      }
    ];
  }

  /**
   * @name      _user
   * @desc      '_user' resolve implementation.
   * @memberOf  Routes.Chat
   * @ngInject
   *
   * @param   {AngularFireAuth} Auth
   * @returns {ng.IPromise<any>|*}
   * @private
   */
  function _user(Auth) {
    return Auth
      .$requireAuth()
    ;
  }

  /**
   * @name      _messages
   * @desc      '_messages' resolve function.
   * @memberOf  Routes.Chat
   * @ngInject
   *
   * @param   {AngularFireArrayService} $firebaseArray
   * @param   {Factories.Dataservice}   dataservice
   * @returns {ng.IPromise<TResult>}
   * @private
   */
  function _messages($firebaseArray, dataservice) {
    return $firebaseArray(dataservice.getReference('messages'));
  }
})();
