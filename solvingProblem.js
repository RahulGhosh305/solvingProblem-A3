//* github link :   https://github.com/RahulGhosh305/solvingProblem-A3



//* Kilometer To Meter Convertion Solving

function kilometerToMeter(value){
    if(value < 0 || typeof value !== 'number'){
        return 'Invalid Number'
    }
    else{
        return value * 1000;
    }
}
// var result = kilometerToMeter(1);
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






//* Hotel Cost Solving

function hotelCost(day){
    var cost = 0
    if(day < 0 || typeof day !== 'number'){
        return 'Invalid Number';
    }
    else{
        for(var i = 1 ; i <= day ; i++){
           if(i >= 1 && i <= 10){
               cost = cost + 100;
           }
           else if(i >= 11 && i <= 20){
               cost = cost + 80;
           }
           else{
               cost = cost + 50;
           }
        }
    }
    return cost;
}

// var totalHotelBill = hotelCost(21);
// console.log(totalHotelBill) 