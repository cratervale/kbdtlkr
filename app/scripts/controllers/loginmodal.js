'use strict';

/**
 * @ngdoc function
 * @name kbyoApp.controller:LoginmodalCtrl
 * @description
 * # LoginmodalCtrl
 * Controller of the kbyoApp
 */
angular.module('kbyoApp')
  .controller('LoginmodalCtrl', function ($scope, $modalInstance, items) {
  	
  	$scope.pitch = 50;

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
  
  $scope.username = "";

  $scope.ok = function () {
    $modalInstance.close($scope.username);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  });
