(function() {
  'use strict';

  /**
   * Specify 'chatScreen' directive for firebaseDemo.chat module.
   *
   * @namespace Directives
   */
  angular
    .module('firebaseDemo.chat')
    .directive('chatScreen', chatScreen)
  ;

  /**
   * @desc      'chatScreen' directive implementation
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
  function chatScreen($window, $timeout) {
    return {
      link: link,
      restrict: 'A'
    };

    //noinspection JSUnusedLocalSymbols
    /**
     * Linker function for 'chatScreen' directive.
     *
     * @param {$scope}    scope
     * @param {$element}  element
     */
    function link(scope, element) {
      // Initialize height values
      var heightHeader = 0;
      var heightFooter = 0;
      var heightTotal = 0;

      // function to make actual chat screen resize
      function resize() {
        $timeout(function onTimeout() {
          heightHeader = document.getElementById('header').offsetHeight;
          heightFooter = document.getElementById('footer').offsetHeight;
          heightTotal = $window.innerHeight - heightHeader - heightFooter - 70;

          angular.element(element).css('height', heightTotal + 'px');
        });
      }

      // Bind resize to window resize event
      angular.element($window).bind('resize', function onEvent() {
        resize();
      });

      // And on initialize resize screen
      resize();
    }
  }
})();
