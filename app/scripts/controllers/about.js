'use strict';

/**
 * @ngdoc function
 * @name hearthsearchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hearthsearchApp
 */
angular.module('hearthsearchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
