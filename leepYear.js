
function determineLeapYear (year) {
    const remainder = year % 4;

    if (remainder == 0) {
        console.log(year + ' ' + 'year is a leep year');
    }
    else {
        console.log(year + ' ' +'year is not a leep year');
    }
}

determineLeapYear(2020);
determineLeapYear(3355);
