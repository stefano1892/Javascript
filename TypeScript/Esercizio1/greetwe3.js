function greeter3(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var paperino = { firstName: "Paolino", lastName: "Paperino" };
document.body.innerHTML = greeter3(paperino);
