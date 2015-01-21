'use strict';

/**
 * @ngdoc directive
 * @name kbyoApp.directive:keyCapture
 * @description
 * # keyCapture
 */
angular.module('kbyoApp')
  .directive('keyCapture', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the keyCapture directive');
      }
    };
  });
