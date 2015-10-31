(function() {
  'use strict';

  /**
   * Specify controller for firebaseDemo.todo module.
   *
   * @namespace Controllers
   */
  angular
    .module('firebaseDemo.todo')
    .controller('TodoController', TodoController)
  ;

  /**
   * @desc      Controller implementation.
   * @namespace Todo
   * @memberOf  Controllers
   * @ngInject
   *
   * @param {Factories.Logger}  logger
   * @param {FirebaseArray}     _todos
   * @constructor
   */
  function TodoController(
    logger,
    _todos
  ) {
    var vm = this;

    vm.todos = _todos;
    vm.label = '';
    vm.form = {};

    // Method to add new item
    vm.add = function() {
      // Define new item
      var todo = {
        label: vm.label,
        dateAdded: new Date().getTime(),
        dateDone: null,
        isDone: false
      };

      // Add new todo item
      vm.todos
        .$add(todo)
        .then(function() {
          logger.success('New todo item added!');

          vm.label = '';
          vm.form.$setUntouched();
        })
      ;
    };

    /**
     * Method to save specified todo item.
     *
     * @param {{}}  todo
     */
    vm.save = function(todo) {
      todo.dateDone = !todo.isDone ? null : new Date().getTime();

      // Save actual item
      vm.todos
        .$save(todo)
        .then(function() {
          logger.success('Todo item saved');
        })
      ;
    };

    /**
     * Method to remove specified todo item.
     *
     * @param {Event} event
     * @param {{}}    todo
     */
    vm.remove = function(event, todo) {
      // We need to stop anything else to happen in this case...
      event.preventDefault();
      event.stopPropagation();

      // Remove actual item
      vm.todos
        .$remove(todo)
        .then(function() {
          logger.success('Todo item removed');
        })
      ;
    };
  }
})();
