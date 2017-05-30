require("mocha");
var should = require("should");
var assert = require("assert");
var wordCount = require("../index");

describe('number of word occurence in file',function(){

	it('should return an object if file i empty',function(){
			wordCount('fert.txt').should.eql({});
		
	});

	it('should return object of word and number of count',function(){
		wordCount('fert.txt').should.eql({ I: 1,
			  need: 1,
			  to: 1,
			  check: 1,
			  if: 1,
			  array: 1,
			  contains: 1,
			  at: 1,
			  least: 1,
			  one: 2,
			  empty: 2,
			  'elements.': 1,
			  If: 1,
			  any: 1,
			  of: 1,
			  the: 1,
			  element: 1,
			  is: 1,
			  then: 1,
			  it: 1,
			  will: 1,
			  return: 1,
			  'false.': 1 })
				});
});