(function() {
  'use strict';

  // Specify controller for module
  angular
    .module('firebaseDemo.chat')
    .controller('ChatController', ChatController)
  ;

  // Controller dependencies
  ChatController.$inject = [
    'logger',
    '_user', '_messages'
  ];

  /**
   * Chat controller
   *
   * @param {logger}        logger
   * @param {{}}            _user
   * @param {FirebaseArray} _messages
   * @constructor
   * @ngInject
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
