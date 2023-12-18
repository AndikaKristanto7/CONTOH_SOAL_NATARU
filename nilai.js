function getNilai(nilai){
    let grade = 0;
    if(nilai >= 26 && nilai <= 30){
        grade = "A"
    }else if(nilai <= 25){
        grade = "B"
    }else if(nilai <= 20){
        grade = "C"
    }else if(nilai <= 15){
        grade = "D"
    }else if(nilai <= 10){
        grade = "E"
    }else if(nilai <= 5){
        grade = "F"
    }
    return grade;
}
console.log(getNilai(30));