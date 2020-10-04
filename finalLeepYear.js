
function isLeepYear(year) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) {
        return true;
    }
    else{
        return false;
    }
}

const check2020 = isLeepYear(2020);
console.log(check2020)

const check4050 = isLeepYear(4050);
console.log(check4050)