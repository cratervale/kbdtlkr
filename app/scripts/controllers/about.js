'use strict';

/**
 * @ngdoc function
 * @name kbyoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kbyoApp
 */
angular.module('kbyoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
