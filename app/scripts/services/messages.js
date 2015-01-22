'use strict';

/**
 * @ngdoc service
 * @name kbyoApp.Messages
 * @description
 * # Messages
 * Factory in the kbyoApp.
 */
angular.module('kbyoApp')
  .factory('Messages', function ($FirebaseArray, $firebase, User) {
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
			var wordId = snapshot.val().wordId;
			var pitch = snapshot.val().pitch;
			var from = "";
			from = snapshot.val().from;
			//Word exists, play it
  			try{
  				this.playWord(wordId, pitch);
  				toastr.info(from + ' says: "' + wordId +'"');
  			} catch(TypeError) {
  				//word doesn't exist, add it, and play it.
  				this.addWord(wordId, true, pitch);
				toastr.info(from + ' says: "' + wordId +'"');  		
			}		
  		},
  		
  		addWord: function(word, shouldPlay, pitch){
  			var so = {};
			self = this;
			speak(word, {pitch: pitch}, so, function(){
				var soundObject = {};
				soundObject.audio = new Audio();
				soundObject.audio.src = 'data:audio/x-wav;base64,' + so.sound;
				
				//instantiate this location as it doesn't evaluate to undefined (you're accessing an object property, not just an object)
				if(!self.localWords[pitch]){
					self.localWords[pitch]  = {};
				}
				self.localWords[pitch][word] = soundObject;
				if(shouldPlay){
					self.playWord(word, pitch);
	  			}
			});
  			
  			
  		},
  		
  		playWord:function(wrd, ptch){
  			this.localWords[ptch][wrd].audio.play();
  		},
  		
  		send: function(word){
  			this.$add({from: User.getUsername(), 'wordId': word, pitch:User.getPitch(), time: this.newTimeStamp()});
  		},
  		
  		newTimeStamp : function(){
			//time in seconds
			// https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
			return Date.now() / 1000 | 0;
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
