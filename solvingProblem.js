//* github link :   https://github.com/RahulGhosh305/solvingProblem-A3



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
// var result = kilometerToMeter(2.2);
// console.log(result);









//* Budget Calculator Solving

function budgetCalculator(watch, phone, laptop){
    var watchCost = 50;
    var phoneCost = 100;
    var laptopCost = 500;

    if(watch < 0 || phone < 0 || laptop < 0){
        return 'Please Enter Positive values';
    }
    else if (typeof watch !== 'number' || typeof phone !== 'number' || typeof laptop !== 'number'){
        return 'Not a number';
    }
    else{
        var Amount = watch * watchCost + phone * phoneCost + laptop * laptopCost;
        return Amount;
    }
}

// var Sum = budgetCalculator(5, 5, 5);
// console.log(Sum) 
