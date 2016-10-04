var expect = require('chai').expect;

var expected, current;

before(function(){
	expected = ['a','b','c'];
});

describe('String#split',function(){
	beforeEach(function	(){
		current = 'a,b,c'.split(',');
		}
	);

	it('should return an Array',function(){
			expect(Array.isArray(current)).to.be.true;
		}
	);
});