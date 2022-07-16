
const Employee = require('./Employe');

class Intern extends Employee {
  constructor(name,id,email,school) {

    super(name, id, email);
    this.school = school;
  }


getSchool(){
    return  {
        type: 'input',
        name: 'School',
        message: 'Whats your school name?',
        validate(value) {
          const pass = value;
          if (value.length >= 5) {
            return true;
          }
          return `Please Write the name of your school:`;
        },
  
      }
}

getRole(){
  return "Intern"
}


}

module.exports = Intern;