// // forloop 
// for(let i = 50 ; i>=1 ; i--){
// console.log(i);
// }

// let sum = 0;eyyadam

// for(let i=1 ; i<=100 ; i++){
//     sum+=i;    
// }
//  console.log(sum);
// let number = 25;
// let fact = 1;

// for (let i = 1; i <= number; i++) {
//     fact *= i;
// }

// console.log(`Factorial of ${number} = ${fact}`);


// let a = 1;
// let b = 0;
// console.log(a);
// console.log(b);

// for(let i=2; i<=10; i++){
//    let next = a+b;
//    console.log(next);
//     a = b;
//     b = next;
// }

// let word = "Naveen";
// let temp = "";

// for(let i=0 ; i<word.length; i++){
//     temp += word[i];
//     console.log(temp);
    
// }

// let letter = "Naveen";

// for(let i = 1 ; i<= letter.length ; i++){
//     console.log(letter.substring(0 , i));
    
// }
let rows = 5;

for (let i = 1; i <= rows; i++) {  
    let line = "";                  
    for (let j = 1; j <= i; j++) {  
        line += "*";                
    }
    console.log(line);             
}

let row = 5;

for(let i =1 ; i<=row; i++){
    console.log("*".repeat(i));
}


let rowss = 5;

for(let i = 1; i<=5; i++ ){
    let liness = "";
    for(let j=1; j<= rowss-i; j++){
        liness += " ";
    }

    for(let k=1 ; k<= i; k++){
        liness += "*";
    }

    console.log(liness)
}
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {  
        console.log(i);
    }
}

  
