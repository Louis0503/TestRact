"use strict"
var assert = require('chai').assert;
var User = require('./testObjects').User;

//Test 
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3,4].indexOf(5));
    });
  });
})

//Test 
describe('String#split',function(){
	it('should return an array',function(){
		assert(Array.isArray('a,b,c,d'.split(',')))
	});

	it('should return the same array',function(){
		assert.equal(['a','b','c','d'].length,'a,b,c,d'.split(',').length,'two arrays have the same length');

		for(let i=0; i<['a','b','c','d'].length;i++){
			assert.strictEqual(['a','b','c','d'][i],'a,b,c,d'.split(',')[i], i + 'element is equal');
		};
	});
})

//Test 
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      let user = new User('Luna');
      user.save(function(err) {
        if (err){
        	done(err);	
        } else{
        	done();	
        } 
      });
    });
  });
});
