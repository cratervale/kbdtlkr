'use strict';

describe('Service: ChatSocket', function () {

  // load the service's module
  beforeEach(module('kbyoApp'));

  // instantiate service
  var ChatSocket;
  beforeEach(inject(function (_ChatSocket_) {
    ChatSocket = _ChatSocket_;
  }));

  it('should do something', function () {
    expect(!!ChatSocket).toBe(true);
  });

});
