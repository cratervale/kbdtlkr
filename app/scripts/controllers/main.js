'use strict';

/**
 * @ngdoc function
 * @name kbyoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kbyoApp
 */
angular.module('kbyoApp')
  .controller('MainCtrl', function ($rootScope, $scope, $firebase, Messages, keyboard, $modal, User) {
  	
   $(document).ready(function(){
        $('#myModal').modal('show');
        console.log("GOOODDD MORNING");
    });
  	$scope.messages = new Messages();
  	$scope.wordIn = "";
  	$scope.wordStaging = "";
  	$scope.inputHasFocus = false;
  	$scope.voicePitch = 50;
  	
  	$scope.setInputHasFocus = function(bool){
  		$scope.inputHasFocus = bool;
  	};
	
	//Load the model  	
  	$scope.keyboard = keyboard;
  	$scope.keys = $scope.keyboard.getKeys();

  	//flag that the ng-class flag watches to know when to adjust the UI to editing mode
  	$scope.isEditing = false;  
  	
  	$scope.$watch('wordIn', function(newValue, oldValue){
  		if(newValue.length > 0){
  			$scope.setEditing(true);
  		} else {
  			$scope.setEditing(false);
  		}
  		
  	});
  	
  	$scope.setEditing = function(bool){
  		$scope.isEditing = bool;
  		if(!$scope.isEditing){
  			$scope.wordStaging = $scope.wordIn;
  			$scope.wordIn = "";
			$rootScope.$$phase || $rootScope.$apply();
  		}
  		
  		console.log($scope.isEditing);
  	};
  	
  	$scope.play = function(key){
  		//check if word is set
  		if(key.word){
  			//send (play) the word
			$scope.messages.send(key.word);
  		}else{
  			console.log("no word set");
  		}
  		
  	};
  	
  	//Function that either sets or plays a word for a given key
  	$scope.setOrPlay = function(key){
  		console.log(key);
  		
  		//check if in editing mode
  		if($scope.isEditing){
  			//set the key's word to the word input box
	  		key.word = $scope.wordIn;
	  		
	  		// play the word locally
	  		$scope.messages.addWord($scope.wordIn, true, User.getPitch());  		
	  		
	  		//reset the word input
  			$scope.wordIn = "";
  		} else {
	  		$scope.play(key);
  		}
  		
  		
  	};
  	
  	
  	$(document).keypress(function(e){
  		var keyPressed = e.keyCode;
  		if(!$scope.isEditing && !$scope.inputHasFocus){
	  		console.log(keyPressed);
	  		//find the key whose keycode === the key pressed
	  		_.each(_.keys($scope.keys), function(item){
		  		var row = $scope.keys[item];
		  		// console.log(row);
		  		_.each(row, function(key){
		  			// console.log(key);ppv
		  			if(key.code === keyPressed-32){
		  				$scope.play(key);
		  			}
		  		});
		  	});
	  	}
  	});
  	
  	$('html').click(function (e) {
  		console.log(e);
    if(e.target.id == 'keyboard' || e.target.tagName == 'LI' || e.target.tagName == "SPAN" || e.target.tagName == "INPUT"){
    	
   	} else {
        //click outside
    	$scope.setEditing(false);
    }
});
  	
  	// $("html").on("click", function(event){
  		// if(!$(event.target).closest('keyboard').length) {
  			// $scope.setEditing(false);
  		// }
  	// });
  	// //the words in this room
  	// $scope.words = sync.$asArray();
  	// $scope.messages = sync.$asArray();
		
	$scope.items = $scope.messages;

	  $scope.open = function (size) {
	
	    var modalInstance = $modal.open({
	      templateUrl: 'views/loginmodal.html',
	      controller: 'LoginmodalCtrl',
	      backdrop:true,
	      keyboard:false,
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });
	
	    modalInstance.result.then(function (args) {

	    }, function () {
	      console.info('Modal dismissed at: ' + new Date());
	    });
	  };
	  
	  $scope.open();
	
	
  });
  