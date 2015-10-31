(function() {
  'use strict';

  /**
   * Specify controller for firebaseDemo.chat module.
   *
   * @namespace Controllers
   */
  angular
    .module('firebaseDemo.chat')
    .controller('ChatController', ChatController)
  ;

  /**
   * @desc      Controller implementation for /chat route.
   * @namespace Chat
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {logger}        logger
   * @param {{}}            _user
   * @param {FirebaseArray} _messages
   * @constructor
   */
  function ChatController(
    logger,
    _user, _messages
  ) {
    var vm = this;

    vm.messages = _messages;
    vm.message = '';
    vm.form = {};

    // Method to send new message
    vm.send = function() {
      // Define new item
      var message = {
        message: vm.message,
        stamp: new Date().getTime(),
        user: {
          name: _user[_user.provider].displayName,
          email: _user[_user.provider].email || '',
          image: _user[_user.provider].profileImageURL
        }
      };

      // Add new message
      vm.messages
        .$add(message)
        .then(function onSuccess() {
          vm.message = '';
          vm.form.$setUntouched();

          logger.log('message stored');
        })
      ;
    };
  }
})();
