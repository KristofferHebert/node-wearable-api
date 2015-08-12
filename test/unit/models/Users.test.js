var expect = require('chai').expect;

describe.only('UsersModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Users.find()
        .then(function(results) {
          expect(true).to.equal(true);
          done();
        })
        .catch(done);
    });
  });

});
