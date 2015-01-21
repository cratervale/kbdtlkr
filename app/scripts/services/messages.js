'use strict';

/**
 * @ngdoc service
 * @name kbyoApp.Messages
 * @description
 * # Messages
 * Factory in the kbyoApp.
 */
angular.module('kbyoApp')
  .factory('Messages', function ($FirebaseArray, $firebase) {
  	var MessagesFactory = $FirebaseArray.$extendFactory({
  		// newTimeStamp : function(){
			// //time in seconds
			// // https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
			// return Date.now() / 1000 | 0;
		// },
		
		localWords : {
  			
  		},
  		
  		muteList:{
  			
  		},
  		
  		$$added: function(snapshot){
  			console.log(snapshot.val());
  			if(this.localWords[snapshot.val().wordId]){
  				// word exists, play it
  				wordId = snapshot.val().wordId;
  				from = "";
  				from = snapshot.val().from;
  				console.log("hi hi hi hi");
  				console.log(from);
  				this.playWord(wordId);
  				toastr.info(from + ' says: "' + wordId +'"');
  				
  			} else {
  				// create word and play it
  				var wordId = snapshot.val().wordId;
  				var from = snapshot.val().from;
  				this.addWord(wordId, true);
				toastr.info(from + ' says: "' + wordId +'"');  				
  			}
  			
  		},
  		
  		addWord: function(word, shouldPlay){
  			var so = {};
			self = this;
			speak(word, {}, so, function(){
				var soundObject = {};
				soundObject.audio = new Audio();
				soundObject.audio.src = 'data:audio/x-wav;base64,' + so.sound;
				self.localWords[word] = soundObject;
				if(shouldPlay){
					self.playWord(word);
	  			}
			});
  			
  			
  		},
  		
  		
  		playWord:function(wrd){
  			console.log("playing Playing");
  			this.localWords[wrd].audio.play();

  		}
  	});
   
   return function(){
		var ref = new Firebase("https://keyboardtalker.firebaseio.com/messages");
	  	// angularfire reference
	  	var sync = $firebase(ref.limitToLast(1), {arrayFactory: MessagesFactory});
	  	
	  	//download the data into a local object
	  	return sync.$asArray();
	  	
	  	// // synchronize the object with a three-way data binding
	  	// syncObject.$bindTo($scope, "data");

   };
  });
