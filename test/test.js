/**
 * Unit testing
 */

var chai = require('chai');
var expect = chai.expect;

var chaiTest = require('../test/check');

describe('isPrime',function(){
    it('tests if number is prime or not',function(){
        expect(chaiTest.isPrime(15)).to.be.true;
        expect(chaiTest.isPrime(24)).to.be.false;
        expect(chaiTest.isPrime(31)).to.be.true;
    });
});