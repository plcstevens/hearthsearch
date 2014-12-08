'use strict';

/**
 * @ngdoc function
 * @name hearthsearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearthsearchApp
 */
angular.module('hearthsearchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
