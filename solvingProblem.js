//* github link :   https://github.com/RahulGhosh305/solvingProblem-A3





//* Kilometer To Meter Convertion Solving

function kilometerToMeter(value){
    if(value < 0 || typeof value !== 'number'){
        return 'Invalid Input';
    }
    else{
        return value * 1000;
    }
}
// var result = kilometerToMeter(5);
// console.log(result);









//* Budget Calculator Solving

function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return 'Please Enter Positive values';
    }
    else{
        var Amount = watch * 50 + phone * 100 + laptop * 500;
        return Amount;
    }
}
// var Sum = budgetCalculator(1,2,3);
// console.log(Sum) 








//* Hotel Cost Solving

function hotelCost(day){
    var cost = 0
    if(day < 0 || typeof day !== 'number'){
        return 'Invalid Number';
    }
    else{
        if(day <= 10){
            cost = day * 100;
        }
        else if(day <= 20){
            var firstTenDays = 10 * 100;
            var remainingDays = day - 10;
            var afterTendays = remainingDays * 80;
            cost = firstTenDays + afterTendays;
        }
        else{
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = day - 20;
            var afterTwentyDays = remainingDays * 50;
            cost = firstTenDays + secondTenDays +afterTwentyDays;
        }
    return cost;
    }
}
// var totalHotelBill = hotelCost(22);
// console.log(totalHotelBill) 










//* Mega Friend Solving

function megaFriend(names){
    if(names.length === 0 || !Array.isArray(names)){
        return 'Input is Invalid'
    }
    else{        
        let longest = '';
        for (let i = 0; i < names.length; i++) {
        if (names[i].length > longest.length)
        longest = names[i];
        }
        return longest;      
    }
}
// var names = ['Ujjal', 'Nila', 'Joy', 'Digonto', 'Sabbir', 'Shahajahan']; 
// var findLongerName = megaFriend(names);
// console.log(findLongerName);