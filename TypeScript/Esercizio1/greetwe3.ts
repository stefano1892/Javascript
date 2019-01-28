interface Person {
    firstName: string,
    lastName: string
}

function greeter3(person: Person){       //do un tipo al parametro
    return "Hello, " + person.firstName + ' ' + person.lastName;
}

let paperino = { firstName: "Paolino", lastName: "Paperino" };

document.body.innerHTML = greeter3(paperino);