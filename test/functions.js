// Test file for Mocha and Chai

function isPrime(value){
    for(var i = 2; i < value; i++) {
        if(value % i==0) {
            return false;
        }
    }
    return true;
}

function loopStressTest(number) {
	for ( i = 0; i < number; i++) {}
	return i == number;
}

function linkExists(url) {
	try {
    var http = new XMLHttpRequest();	
		http.open('HEAD', url, false);
		http.send();
		return http.status!=404;
	} catch (err)
	{
		//catch for Chrome local testing, permission blocking
		if (err.message.includes("Failed to execute"))
			return true;
	}
	
}

