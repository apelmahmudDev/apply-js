
function ceckPrime(n){
    for(var i = 2; i < n; i++){
        if(n % i == 0){
            return 'Your number is not a prime number';
        }
    }
    return 'Your number is a prime number';
}

var result = ceckPrime(41);
console.log(result);