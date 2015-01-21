'use strict';

/**
 * @ngdoc function
 * @name kbyoApp.controller:LoginmodalCtrl
 * @description
 * # LoginmodalCtrl
 * Controller of the kbyoApp
 */
angular.module('kbyoApp')
  .controller('LoginmodalCtrl', function ($scope, $modalInstance, items, Messages, User) {
  	
  	$scope.pitch = 50;
  	
  	// $scope.messages = new Messages();
  	

  $scope.messages = items;
  // $scope.selected = {
    // item: $scope.items[0]
  // };
  
  $scope.username = "";
  
	$scope.testVoice = function(){
  		User.setPitch($scope.pitch);
  		$scope.messages.addWord("You are hearing me talk", true, User.getPitch());
  	};

  $scope.ok = function () {
  	User.setUsername($scope.username);
  	//sometimes if the user clicks up outside the range input, the testVoice function doesn't get called, and therefore setPitch isn't called either.
  	User.setPitch($scope.pitch);
  	
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  });
