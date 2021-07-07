// 1st method

function ceckPrime(n) {
	for (var i = 2; i < n; i++) {
		if (n % i == 0) {
			return 'Your number is not a prime number';
		}
	}
	return 'Your number is a prime number';
}

var result = ceckPrime(41);
// console.log(result);

// 2nd method to determine prime number using for loop & right way

function primeNumber(num) {
	let flag = 0;
	if (num === 1) {
		return `${num} is not a prime. A prime number must be greater than ${num}`;
	} else if (num > 1) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				flag = 1;
				break;
			}
		}

		if (flag === 0) {
			return `${num} is a prime number`;
		} else {
			return `${num} is not a prime number`;
		}
	} else {
		console.log('Please enter positive number!');
	}
}

console.log(primeNumber(521));
