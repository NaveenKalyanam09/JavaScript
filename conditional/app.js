// let num = 10;
// if(num>=0){
//     console.log("positive")
// }

let num1 = 100997759988899
if(num1%2===0){
    console.log("even")
}else{
    console.log("odd")
}

let marks = 90
if (marks > 100 || marks < 0) {
    console.log("Invalid Marks");
}else if(marks>=90){
    console.log("grade A");
}else if(marks>=80){
    console.log("grade B");
}else if(marks>=70){
    console.log("grade C");
}else{
    console.log("Fail");
}

   let month = 9;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}

let bill = 580;
if(bill>=500){
    console.log("Special Offer Available");
}

let daysLate = 4;
if(daysLate>0){
    console.log("Fine Applied");
}else{
    console.log("No Fine")
}

let distance = 16;

if (distance < 0) {
    console.log("Invalid distance");
} else if (distance <= 5) {
    console.log(`Charge: ₹50`);
} else if (distance <= 15) {
    console.log(`Charge: ₹100`);
} else if (distance <= 25) {
    console.log(`Charge: ₹150`);
} else {
    console.log(`Charge: ₹200`);
}

let choice = 4;

switch(choice){
    case 1:
        console.log("Espresso");
    break;
    case 2:
        console.log("Cappuccino");
    break;

    case 3:
        console.log("Latte");
    break;

    case 4:
        console.log("Black Coffee");
    break;

    default:
        console.log("invalid choice");
}

let sub1 = 35;
let sub2 = 50;
let sub3 = 60;

let total = sub1+sub2+sub3;

if(sub1>=35 && sub2>=35 && sub3>=35){
    if(total>=120){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
} else{
    console.log("fail");
}

let pin = 7723;
let enterdPin = 7723;
let balance = 4800;
let enterdBalance = 5000;


if(pin===enterdPin){
    if(balance>=enterdBalance){
        console.log("withdrawal is possible");
    }else{
        console.log("withdrawal is notpossible");
    }
}else{
    console.log("pin is incorrect")
}
let recharge = 199;
if(recharge===199){
    console.log("Extra Data Activated")
}