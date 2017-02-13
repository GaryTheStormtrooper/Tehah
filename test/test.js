/**
 * Unit testing
 */

var expect = chai.expect;
var should = chai.should();

it('Calling isPrime(17) should return true', function() {
    expect(isPrime(17)).to.be.true;
});

it('Calling isPrime(15) should return false', function() {
    expect(isPrime(15)).to.be.false;
});