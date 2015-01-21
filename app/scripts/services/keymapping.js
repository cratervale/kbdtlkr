'use strict';

/**
 * @ngdoc service
 * @name kbyoApp.keymapping
 * @description The keymappings + gui and data model for the usable keys in the keyboard speaker app.  
 * # keymapping
 * Factory in the kbyoApp.
 */
angular.module('kbyoApp')
  .factory('keyboard', function () {
	var keys = {
		qwerty: [
			{
				class	: 	"key",
				character:	"q",
				code	:	81,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"w",
				code	:	87,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"e",
				code	:	69,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"r",
				code	:	82,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"t",
				code	:	84,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"y",
				code	:	89,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"u",
				code	:	85,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"i",
				code	:	73,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"o",
				code	:	79,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"p",
				code	:	80,
				text	: 	"",
				word	: 	""
			}
		],
		asdfg: [
			{
				class	: 	"key",
				character:	"a",
				code	:	65,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"s",
				code	:	83,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"d",
				code	:	68,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"f",
				code	:	70,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"g",
				code	:	71,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"h",
				code	:	72,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"j",
				code	:	74,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"k",
				code	:	75,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"l",
				code	:	76,
				text	: 	"",
				word	: 	""
			}
		],
		zxcvb: [
			{
				class	: 	"key",
				character:	"z",
				code	:	90,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"x",
				code	:	88,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"c",
				code	:	67,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"v",
				code	:	86,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"b",
				code	:	66,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"n",
				code	:	78,
				text	: 	"",
				word	: 	""
			},
			{
				class	: 	"key",
				character:	"m",
				code	:	77,
				text	: 	"",
				word	: 	""
			}
		]
	};

    return {
      getKeys: function () {
        return keys;
      },
      
    };
  });
