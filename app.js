// 1. Write a function named getFullName that accepts two parameters, first and last name and returns the full name

const getFullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};

console.log(getFullName("Adedayo", "Adeniyi"));
console.log(getFullName("Timi", "Adeniyi"));


// 2.Write a function named celsiusToFahrenheit that takes a temperature in Celsius as a parameter and returns the equivalent temperature in Fahrenheit. (check how to convert Celsius to Fahrenheit)

const celsiusToFahrenheit = function (Celsius) {
    let fahrenheit = (Celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(10));


// 3. Write a function named max that takes two numbers as parameters and returns the larger of the two.

const max = (a, b) => a > b ? a : b;

console.log(max(9,3));
console.log(max(9, 55));

// 4. Write a function named convertToSeconds that takes a number of minutes as a parameter and returns the equivalent number of seconds.

const convertToSeconds = function(minutes) {
    return minutes * 60;
}

console.log(convertToSeconds(8));
console.log(convertToSeconds(16));


// 5. Write a function named containsSubstring that takes two strings as parameters: str and substr. Return true if str contains substr, and false otherwise.

const containsSubstring = (str, substr) => str.includes(substr) ? true : false;

console.log(containsSubstring("hello baby", "world"));
console.log(containsSubstring("I love u alot", "love"));