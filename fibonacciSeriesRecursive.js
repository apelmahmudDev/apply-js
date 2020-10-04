function fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1 ){
        return [0, 1];
    }
    else {
        //caculate arry nth element ............
        var fibo = fibonacci(n-1);
        var nexElement = fibo[n-1] + fibo[n-2];
        fibo.push(nexElement);
        return fibo;
    }
}

var result = fibonacci(10);
console.log(result);