'use strict';

describe('Service: keymapping', function () {

  // load the service's module
  beforeEach(module('kbyoApp'));

  // instantiate service
  var keymapping;
  beforeEach(inject(function (_keymapping_) {
    keymapping = _keymapping_;
  }));

  it('should do something', function () {
    expect(!!keymapping).toBe(true);
  });

});
