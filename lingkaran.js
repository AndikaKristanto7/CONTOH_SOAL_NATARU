const PI = Math.PI;
function getLuasKel(r){
    let luas = PI * (r*r);
    let keliling = 2 * PI * r;
    return {
        luas,
        keliling
    }
}
console.log(getLuasKel(10))