
const Employee = require('./Employe');

class Manager extends Employee {
  constructor(name,id,email,Office) {

    super(name, id, email);
    this.Office = Office;
  }

getOfficeNumber(){
    return  {
        type: 'input',
        name: 'userName',
        message: 'Whats your Office Number?',
        validate(value) {
          const pass = value;
          if (value.length >= 5) {
            return true;
          }
          return `Please type your Office Number, this Field cannot be Empty:`;
        },
  
      }
}

getRole() {
    return "Manager"
}


}

module.exports = Manager;