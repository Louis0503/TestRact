"use strict"
var boot = require('../testApp').boot;
var shutdown = require('../testApp').shutdown;
var port = require('../testApp').port;
var superagent = require('superagent');
var expect = require('chai').expect;

describe('server', function() {

  before(function() {
    boot();
  });

  describe('#homePage', function() {
    it('shoulde respond to GET', function(done) {
      superagent
	    .get('http://localhost:' + port)
	    .end(function(err,res) {
	      expect(res.status).to.equal(200);
	      done();
		});
	  });
  });

  after(function() {
    shutdown();
  });
});
