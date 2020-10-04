// !3 =  1x2x3;
// !4 = 1x2x3x4;
// !5 = 1x2x3x4x5;
// !10 = 1*2*3*4*5*6*7*8*9*10;

function factorial(n) {
    let fatorial = 1;

    for (let i = 1; i <= n; i++){
        const element = i;
        fatorial = fatorial * i;
        console.log(i, fatorial);
    }
    return fatorial;
}

const f1 = factorial(5);
console.log(f1)

const f2 = factorial(100);
console.log(f2)
