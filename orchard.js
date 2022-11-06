///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0;
for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log("Total acres: " + totalAcres);
console.log("-----");

//to get the total acres picked for entire week I have added the total acres of each kind of apples
//picked for each day of a week using for loop and added total acres in totalacres variable.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7;
console.log("Average daily acres: " + averageDailyAcres);
console.log("-----");
//To calculate the average i have divided totalacres by 7    as 7 days in week.

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE
while (acresLeft >= 0) {
  days += 1;
  acresLeft = acresLeft - averageDailyAcres;
}
console.log("Days: " + days);
console.log("-----");

/*wrote a while loop that will continue to run while `acresLeft` is above 0. 
so that it will give exact number of days required.
On each iteration of the loop:added 1 to the `days` variable and subtracted 
daily average from the number of acres left*/

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = 0;
let galaTons = 0;
let pinkTons = 0;

//Made an empty array which will have apples in tons picked later.
let fujiAcresTons = [];
let galaAcresTons = [];
let pinkAcresTons = [];

for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons = fujiAcres[i] * 6.5;
  fujiAcresTons.push(fujiTons);
  galaTons = galaAcres[i] * 6.5;
  galaAcresTons.push(galaTons);
  pinkTons = pinkAcres[i] * 6.5;
  pinkAcresTons.push(pinkTons);
}
console.log("Fuji apples picked in tons: " + fujiAcresTons);
console.log("Gala apples picked in tons: " + galaAcresTons);
console.log("Pink apples picked in tons: " + pinkAcresTons);
console.log("-----");

/* made an 3 array that list the daily amount of apples picked, in tons, for each variety.
 Used the push method on acres array yo push the calculated tons of each variety in new array.*/

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;
let fujiTotaltons = 0;
let galaTotalTons = 0;
let pinkTotalTons = 0;

for (let i = 0; i < fujiAcresTons.length; i++) {
  fujiTotaltons += fujiAcresTons[i];
  galaTotalTons += galaAcresTons[i];
  pinkTotalTons += pinkAcresTons[i];
}

fujiPounds = fujiTotaltons * 2000;
galaPounds = galaTotalTons * 2000;
pinkPounds = pinkTotalTons * 2000;

console.log("Total pounds picked are below ");
console.log("fuji: " + fujiPounds);
console.log("gala: " + galaPounds);
console.log("pink: " + pinkPounds);
console.log("-----");
/*To calculate the total number of pounds picked per variety.
I have added total tons picked for every variety over a week through for loop.
Then converted the total tons into the pounds using conversion of tons into pound.*/

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = 0;
let galaProfit = 0;
let pinkProfit = 0;

fujiProfit = (fujiPounds * fujiPrice) / 100;
galaProfit = (galaPounds * galaPrice) / 100;
pinkProfit = (pinkPounds * pinkPrice) / 100;
console.log("fuji profit: $" + fujiProfit);
console.log("gala profit: $" + galaProfit);
console.log("pink profit: $" + pinkProfit);
console.log("-----");

//Calculated the profit by multiplying total pounds picked by
//given price for each variety and then converted the profit into dollars.

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log("Total profit: $" + totalProfit);
//Added the profit of all the three vaiety of apples to get the total profit.
