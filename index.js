// Let the user enter username & password, the assignment didnt ask for this but I assumed it is needed.

let username = prompt("Enter username:");
let password = prompt("Enter password:");

// Valid or invalid password return.

if (isValidPassword(password, username)) {
    console.log("Password is valid.");
} else {
    console.log("Password is invalid.");
}