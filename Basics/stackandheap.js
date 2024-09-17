// stack{primitive}

let myEmail = "asad@google.com"

let anotherEmail = myEmail
anotherEmail = "basha@google.com"

// console.log(myEmail);
// console.log(anotherEmail);

// heap{Non-primitive}

let userOne = {
    mail:"shaik@google.com",
    age: 23
}

let userTwo = userOne

console.log(userTwo.mail);
