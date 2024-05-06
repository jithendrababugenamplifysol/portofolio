/*
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cfpassword = document.querySelector("#confirmpassword");
*/

/*
let username = document.querySelector("#username"),
    email = document.querySelector("#email"),
    password = document.querySelector("password"),
    cfpassword = document.querySelector("confirmpassword");
*/

let id = (id) => document.querySelector(id);
let classes = (classes) => document.querySelectorAll(classes);

let form = id("#form"),
    username = id("#username"),
    email = id("#email"),
    password = id("#password"),
    cfpassword = id("#confirmpassword"),
    errorMsg = classes(".error"),
    failureIcon = classes(".failure-icon"),
    successIcon = classes(".success-icon");



/*
let cl = (cl) => console.log(cl);
cl(username);
cl(email);
cl(password);
cl(cfpassword);
cl(errorMsg);
cl(failureIcon);
cl(successIcon);

errorMsg[0].innerHTML = "user name cannot be blank";
errorMsg[1].innerHTML = "email cannot be blank";
errorMsg[2].innerHTML = "password cannot be blank";
errorMsg[3].innerHTML = "password not matching";
*/




let engine = (element, SNo, message) => {
    if (element.value.trim() === '') {
        errorMsg[SNo].innerHTML = message;
        successIcon[SNo].style.opacity = "0";
        failureIcon[SNo].style.opacity = "1";
    }
    else {
        errorMsg[SNo].innerHTML = "";
        failureIcon[SNo].style.opacity = "0";
        successIcon[SNo].style.opacity = "1";
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "username cannot be blank");
    engine(email, 1, "email cannot be blank");
    engine(password, 2, "password cannot be blank");

    if (password.value !== '' && cfpassword.value === '') {
        errorMsg[3].innerHTML = "Type your password again";
        successIcon[3].style.opacity = "0";
        failureIcon[3].style.opacity = "1";
    }
    else if (cfpassword.value !== password.value) {
        errorMsg[3].innerHTML = "Password not matching! Try again";
        successIcon[3].style.opacity = "0";
        failureIcon[3].style.opacity = "1";
    }
    else if (password.value !== '' && password.value === cfpassword.value) {
        errorMsg[3].innerHTML = "";
        failureIcon[3].style.opacity = "0";
        successIcon[3].style.opacity = "1";
    }
    
});