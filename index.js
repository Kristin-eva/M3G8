// Fundamentals = Grunnatriði
// Comments = Athugasemdir í grænum lit
// Output (console.log, alert, innerHTML)
// console.log = outputs a message to the browser console log 
// alert = pop up window
// innerHTML = --> t.d. document.getElementById().innerHTML = a message inside an element on your webpage
// LET allows the variable to be reassigned multiple times, while CONST creates a variable that cannot be reassigned after it has been assigned a value.
// Step 1 - Reading about TypeScript
// Step 2 - Run the TypeScript transcompiler using the tsc command.
// Step 3 - Here I needed to change "realAge = 4 years" to "realAge = 4" because I can't multiple 4 years with 7 (sentence*number) so I had to change 4 years to only number "4"
var aged = true;
var realAge = 0;
if (aged) {
    realAge = 4;
}
var dogAge = realAge * 7;
console.log("".concat(dogAge, " years"));
// Step 4 - Here I had to add ":string" to firstName beacause I had to state what kind of thing firstName was (a string)
var firstName = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length);
// Step 5 - assign color and a number(as a string) to the guess variable.
var guess;
guess = "blue";
guess = 42;
// Step 6 - Here was ":string" missing from phoneNumber. I also added ' before and after the second phone number
var phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
}
else {
    phoneNumber = '7167762323';
}
