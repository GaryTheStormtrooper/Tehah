// Test file for Mocha and Chai

function isPrime(value){
    for(var i = 2; i < value; i++) {
        if(value % i==0) {
            return false;
        }
    }
    return true;
}
