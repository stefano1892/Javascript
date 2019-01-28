var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter4(person) {
    return "Hello, " + person.firstName + ' ' + person.middleInitial + ' ' + person.lastName;
}
var studente = new Student("Paolino", 'Mc', "Paperino");
document.body.innerHTML = greeter4(studente);
