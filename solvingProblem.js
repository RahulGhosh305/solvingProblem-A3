



//* Kilometer To Meter Convertion Solving

function kilometerToMeter(value){
    if(value < 0){
        return 'Your input is Negitive Number, Please input Correct Number'
    }
    else if(typeof value !== 'number' ){
        return 'Not a Number! Enter actual number value';
    }
    else{
        return value * 1000;
    }
}
var result = kilometerToMeter(2.2);
console.log(result);

