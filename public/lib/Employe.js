
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  
  }

getName(){
  return  {
      type: 'input',
      name: 'name',
      message: 'Whats your name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}

// create uuid and return it.
getid(){
    let result  = Math.floor( (1 + Math. random()) * 0x10000).toString(16).substring(1);
   return result
    }

    getEmail(){
         return {
              type: 'input',
              name: 'email',
              message: 'Whats your email',
              validate(value) {
                const pass = value;
                if (value.length >= 2) {
                  return true;
                }
                return (`Please add your email in this format example@domain.com`);
              }
        
            }
        }

        getRole(){
          return "Employee"
        }
  

}
module.exports = Employee;
 


