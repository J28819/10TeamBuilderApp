
const Employee = require('./Employe');

class Engineer extends Employee {
  constructor(name,id,email,userName) {

    super(name, id, email);
    this.userName = userName;
  }

getUserName(){
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
    return "Engineer"
}


}

module.exports = Engineer;