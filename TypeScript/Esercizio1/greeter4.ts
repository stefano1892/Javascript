class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName= firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: string,
    middleInitial: string,
    lastName: string
}

function greeter4(person: Person){       //do un tipo al parametro
    return "Hello, " + person.firstName + ' ' + person.middleInitial + ' ' + person.lastName;
}

let studente = new Student ( "Paolino", 'Mc', "Paperino" );

document.body.innerHTML = greeter4(studente);