function getFactorial(number){
    if (num === 0 || num === 1) return 1;
    for(let i = number - 1;i >= 1;i--){
        number *= i;
    }
    return number;
}
console.log(getFactorial(4));
