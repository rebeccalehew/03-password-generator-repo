// Define the characters that may be used in a strong password.
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*_-+=";

// Declare variables for each of the DOM elements included in the application.
const passwordTxt = document.querySelector("#password");
const length = document.querySelector("#length");
const incNumbers = document.querySelector("#numbers");
const incSpecial = document.querySelector("#special");
const generateBtn = document.querySelector("#generate");

// Generates the password string with the allowable characters based on length specified and the options selected. Passes data to the generatePassword function.
generateBtn.addEventListener("click", () => {
  let characters = alphaUpper + alphaLower;
  incNumbers.checked ? (characters += numbers) : "";
  incSpecial.checked ? (characters += special) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

// The function that creates the password.
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};