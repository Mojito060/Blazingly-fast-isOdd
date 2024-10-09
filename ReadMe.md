<p align="center">
  <img src="https://github.com/Mojito060/Blazingly-fast-isOdd/blob/master/logo.png?raw=true" alt="logo"/>
</p>

## Check If Odd
 <p>
<img src="{https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E} /> <img src="{https://img.shields.io/badge/Burger%20King-D62300?style=for-the-badge&logo=Burger%20King&logoColor=white}" /> <img alt="image "//img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white /> <img src="{https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white />
</p>
A simple, lightweight npm package to determine if a number is odd. This package provides a blazingly fast alternative to existing solutions like the `is-odd` package by leveraging bitwise operations.

## Installation

You can install the package using npm:

```bash
npm install blazingly-fast-is-odd
```
## Usage
To use the checkIfOdd function, require the package in your JavaScript code:

```
const { checkIfOdd } = require('check-if-odd');

console.log(checkIfOdd(3));  // true
console.log(checkIfOdd(4));  // false
console.log(checkIfOdd(-5)); // true
console.log(checkIfOdd(-6)); // false
```
## Function Signature


```checkIfOdd(number)```

* Parameters
    * ```number```: The number to check (can be an integer).
* Returns
  * ```true``` if the number is odd, ```false``` if it is even.
  
  
## Performance
  
The ```chekIfOdd``` function uses a bitwise operation (```number & 1```) to determine if a number is odd. This method is typically faster than using modulus (```number % 2```) because bitwise operations are generally more efficient at the processor level.

## License
GPL-3.0-or-later License. See LICENSE for details.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.