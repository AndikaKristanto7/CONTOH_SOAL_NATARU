function getSecondMax(arr){
    let max = Math.max(...arr);
    let secondMaxArr = arr.filter((x) => x < max);
    let secondMax = Math.max(...secondMaxArr)
    return secondMax
}
console.log(getSecondMax([1,2,3]))