
function seven_boom(num){
    num_string = num.toString();
    if (num % 7 === 0){
        console.log("Boom")
    }
    if( (num_string.toLowerCase().includes("7")) === true)  {
        console.log("Boom");
    } else {
        console.log(`${num}`);
    }
}

//*************************************************************************
function numprim(number){
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`The number ${number} is a prime number`);
    } else {
        console.log(`The number ${number} is a not prime number`);
    }
}

else {
    console.log("You must choose a number greater than 1");
}
}

// ***********************************************************************
function Check_number(number) {
    if (number % 2 === 0){
        console.log(`${number} is an even number`);
    } else {
        console.log(`${number} is an odd number`);
    }
}

module.exports = {
    seven_boom: seven_boom, 
    numprim: numprim,
    Check_number: Check_number
}

