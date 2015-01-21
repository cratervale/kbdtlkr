'use strict';

describe('Directive: keyPress', function () {

  // load the directive's module
  beforeEach(module('kbyoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<key-press></key-press>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the keyPress directive');
  }));
});
