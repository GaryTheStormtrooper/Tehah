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

it('Calling loopStressTest(8) should return true', function() {
    expect(loopStressTest(8)).to.be.true;
});

it('Calling loopStressTest(8000000) should return true', function() {
    expect(loopStressTest(8000000)).to.be.true;
});

it('Calling linkExists(test.js) should return true', function() {
    expect(linkExists('test.js')).to.be.true;
});

it('Calling linkExists(function.js) should return true', function() {
    expect(linkExists('function.js')).to.be.true;
});

it('Calling linkExists(../public/index.html) should return true', function() {
    expect(linkExists('../public/index.html')).to.be.true;
});