/*Using prompt()
The simplest way to get user input in a web browser is with the prompt() method. This method displays a modal dialog box that asks the user for some text.

JavaScript

let userInput = prompt("Please enter your name:");

if (userInput) {
  // The user entered something and didn't cancel
  console.log("Hello, " + userInput + "!");
} else {
  // The user clicked "Cancel" or closed the dialog
  console.log("User canceled the input.");
}
Keep in mind that prompt() blocks the execution of the rest of the code until the user provides input or cancels the dialog. The return value is a string of whatever the user typed, or null if they click "Cancel."









as an integer


The prompt() function, which is used to get a user's input in a browser, returns a string. You need to convert this string to a number using either parseInt() or Number().

JavaScript

let userInput = prompt("Please enter a number:");
let userNumber = parseInt(userInput);

if (isNaN(userNumber)) {
  console.log("That's not a valid number.");
} else {
  console.log("You entered the number:", userNumber);
  console.log("Its type is:", typeof userNumber); // This will show "number"
}
parseInt(string): This is the most common method. It parses the string and returns an integer. It will stop parsing if it encounters a non-numeric character. For example, parseInt("100px") will return 100.

Number(string): This method attempts to convert the entire string into a number. If the string contains any non-numeric characters (other than a decimal point), it will return NaN (Not a Number).

isNaN(): It's crucial to check if the result is NaN to handle cases where the user enters text instead of a number.
*/