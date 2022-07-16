
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
          return 'Please add your name';
        }
      }
  
 
  }


  getid(){
   
     return   {
            type: 'input',
            name: 'id',
            message: 'Whats your id?',
            validate(value) {
              const pass = value;
              if (value.length >= 2) {
                return true;
              }
              return 'Please add your id';
            }
      
          }
      
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
   
  
  
 