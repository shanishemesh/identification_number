# identification_number

## Introduction:
identification_number  is an math library, offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions.
##### for Example:
- is the number comply with the rules of the "7 Boom" game.
- Is the number a prime number?
- Is the number even or odd?
The goal is to prevent the user from performing various mathematical operations to reach the results that the package functions can bring in seconds.

## Features:
- Supports numbers, big numbers, complex numbers, fractions.
- Contains a flexible expression parser.
- Does symbolic computation.


## Example:
#### "7 Boom":
```bash
function seven_boom(num){
    num_string = num.toString();
    if (num % 7 === 0){
        console.log("Boom")
    }
        if( (num_string.toLowerCase().includes("7")) === true) {
            console.log("Boom"); } else { console.log(${num}); 
        }
}
```
##### The result: 
```bash
seven_boom(4568); \\4568
seven_boom(77); \\Boom
```

## Exports:
```bash
  module.Exports = { 
    seven_boom: seven_boom,
    numprim: numprim,
    Check_number: Check_number
}
```
## Installing:
node.js:

```bash
npm install identification_number
```

## Using:
Enter the following code in the document and select the function relevant to you, as follows:
```bash
ver x = require("identification_number"); 
x.The name of the function(The number you are checking); \\Example: x.seven_boom(5);

or 

x = require("identification_number"); 
x.The name of the function(The number you are checking); \\Example: x.seven_boom(5);
```
## 🔗 Links:
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=purple)](https://github.com/shanishemesh)
