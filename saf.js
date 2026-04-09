

let password = prompt("Enter your password");


for (let i = 0; i < 3; i++) {
    if (password == "3252"){
        alert("Welcome to the system");
        break;
    }
    else {
        alert("Wrong password, try again");
        password = prompt("Enter your password");
    }
}