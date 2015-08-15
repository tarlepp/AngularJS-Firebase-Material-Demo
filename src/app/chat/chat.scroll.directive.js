(function() {
  'use strict';

  // Module initialization
  angular
    .module('firebaseDemo.chat')
    .directive('chatScroll', chatScroll)
  ;

  // Directive dependencies
  chatScroll.$inject = ['$window', '$timeout'];

  /**
   * Actual directive code.
   *
   * @param   {$window}   $window
   * @param   {$timeout}  $timeout
   * @returns {{
   *    link: function,
   *    restrict: string
   *  }}
   * @ngInject
   */
  function chatScroll($window, $timeout) {
    return {
      link: link,
      restrict: 'A'
    };

    /**
     * Linker function for 'chatScroll' directive.
     *
     * @param {$scope}    scope
     * @param {$element}  element
     * @param {object}    attributes
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
