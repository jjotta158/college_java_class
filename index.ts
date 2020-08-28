import Person from './models/Person'
import Student from './models/Student'
import Employee from './models/Employee'

const myPerson:Person = new Person('Jairo Junior', 46046085802, '29/01/2001')

console.log(myPerson.getName())