'use strict';

/**
 * @ngdoc service
 * @name kbyoApp.User
 * @description
 * # User
 * Factory in the kbyoApp.
 */
angular.module('kbyoApp')
  .factory('User', function () {
    // Service logic
    // ...

    var username = "";
    var pitch = 50;

    // Public API here
    return {
      setUsername: function (u) {
      	this.username = u;
		if(!u.trim().length) {
	      	this.username = "annonymous creeper";
	     }
	     console.log("Set Username to: " + this.username);
      },
      getUsername: function(){
      	return this.username;
      },
      setPitch: function(p){
      	this.pitch = p;
      },
      getPitch: function(){
      	return this.pitch;
      }
    };
  });
