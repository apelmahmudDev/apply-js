
//determine fibonacci numbers;

function fibonacciNum(n){
    
    const fibo = [0, 1];
    let i = 2;
    while(i <= n) {
        fibo[i] = fibo[i-1] + fibo[i-2];
        i++;
    }
    return fibo;
}

const result = fibonacciNum(20);
console.log(result);