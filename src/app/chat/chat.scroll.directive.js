(function() {
  'use strict';

  /**
   * Specify 'chatScroll' directive for firebaseDemo.chat module.
   *
   * @namespace Directives
   */
  angular
    .module('firebaseDemo.chat')
    .directive('chatScroll', chatScroll)
  ;

  /**
   * @desc      'chatScroll' directive implementation
   * @namespace chatScroll
   * @memberOf  Directives
   * @ngInject
   *
   * @param   {$window}   $window
   * @param   {$timeout}  $timeout
   * @returns {{
   *    link: function,
   *    restrict: string
   *  }}
   */
  function chatScroll($window, $timeout) {
    return {
      link: link,
      restrict: 'A'
    };

    /**
     * Linker function for 'chatScroll' directive.
     *
     * @param {$scope}    scope       Current scope
     * @param {$element}  element     Element object
     * @param {object}    attributes  Element attributes
     */
    function link(scope, element, attributes) {
      // Function to make actual scroll
      function scroll() {
        $timeout(function onTimeout() {
          element[0].scrollTop = element[0].scrollHeight;
        });
      }

      // Watch message collection and whenever it changes scroll bottom
      scope.$watchCollection(attributes.chatScroll, function onEvent() {
        scroll();
      });

      // Also bind scroll to window resize event
      angular.element($window).bind('resize', function onEvent() {
        scroll();
      });
    }
  }
})();
