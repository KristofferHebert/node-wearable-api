var Sails = require('sails')

before(function(done) {

	// Increase the Mocha timeout so that Sails has enough time to lift.
	this.timeout(5000)

	Sails.lift({
		// configuration for testing purposes
	    }, function(err, server) {
		var sails = server
		if (err) return done(err)
		// here you can load fixtures, etc.
		done(err, sails)
	    });
});

after(function(done) {
	// here you can clear fixtures, etc.
	Sails.lower(done)
});
