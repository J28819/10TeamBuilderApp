
const Employee = require('./Employe');

class Manager extends Employee {
  constructor(name,id,email,userName) {

    super(name, id, email);
    this.school = school;
  }

getOfficeNumber(){
    return  {
        type: 'input',
        name: 'userName',
        message: 'Whats your GitHub Username?',
        validate(value) {
          const pass = value;
          if (value.length >= 5) {
            return true;
          }
          return `Please add your GitHub name, this Field cannot be Empty:`;
        },
  
      }
}

getRole() {
    return {
        role: "Manager"
    }
}


}

module.exports = Manager;