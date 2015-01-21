'use strict';

/**
 * @ngdoc directive
 * @name kbyoApp.directive:Key
 * @description
 * # Key
 */
angular.module('kbyoApp')
  .directive('key', function (Messages) {
    return {
      scope:{
      	character: "@",
      	txt: "=",
      	code: "@",
      	word: "@",
      	// wordIn: "@",
      	cl : "@",
      	action : "&"
      },
      controller: function($scope, $element){
      	
      	$scope.$watch("word", function(newVal, oldVal){
	      	if($scope.word.length > 0){
	      		//truncate to fit
	      		$scope.txt = newVal.slice(0,5);
	      		// console.log($scope.txt);
	      	} else {
	      		$scope.txt = $scope.character;
	      	}
      	});
      },
      // template: '<li ng-click="action(wrd)"><a class="key"><span>{{$scope.wordIn}}</span></a></li>',
      template: '<li data-ng-click="action()"><a ><span>{{txt}}</span></a></li>',
      restrict: 'E',
      replace:true
    };
  });
