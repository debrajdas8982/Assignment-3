
// Problem 1: kilometerToMeter

function kilometerToMeter(kilometer){

    if (kilometer<= 0)
    {
        console.log('Negative or 0 value cannot be a input.Please enter a positive number');
    }
    else
    {
        let meter = kilometer * 1000;
        return meter;
    }  
}

kilometerToMeter(6.5);

// Problem 2 : budgetCalculator

function budgetCalculator(watch , phone, laptop){

    let watchCost = 50;
    let phoneCost = 100;
    let laptopCost = 500;

    if((watch < 0) || (phone < 0) || (laptop < 0))
    {
        console.log("Please enter a positive or zero product value"); 
    }
    else
    {
        let totalCost = watch * watchCost + phone * phoneCost + laptop * laptopCost;
        return totalCost;
    }

}
 budgetCalculator(1,1,8);


// Problem 3 : hotelCost

function hotelCost(days){

    var totalPrice = 0;

    if(days<= 0)
    {
        console.log("Please enter a valid Day:");
    }

    else if(days<= 10)
    {
        totalPrice = days * 100;
    }
    else if(days<= 20)
    {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10; 
        var secondTwentyDays = remainingDays * 80;
        totalPrice = firstTenDays + secondTwentyDays;
    }
    else
    {   
        var  firstTenDays = 10 * 100;
        var  secondTwentyDays = 10 * 80; 
        var  remainingDays = days - 20; 
        var  thirdremainingDays = remainingDays * 50;
        totalPrice = firstTenDays + secondTwentyDays + thirdremainingDays;
    }
    return totalPrice;
}

hotelCost(15);

//Problem 4: megaFriend

function megaFriend(arr) {
    let name = "";
    for (let i = 0; i < arr.length; i++) {
      if (name.length < arr[i].length) {
        name = arr[i];
      }
    }
    return name;
  }
  
megaFriend(['Ariful Islam', 'Jamilur Islam', 'Khalil Rahman', 'Boishakhi Ahmed']);


