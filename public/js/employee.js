class Employee {
   
  
    getname() {
      console.log(`name: ${this.name}`);
    }
    getid(){
        console.log(`id: ${this.id}`);

    }

    getemail(){
        console.log(`email: ${this.email}`);

    }

    getRole(){
        console.log(`Role: ${this.Role}`);
    }




    constructor(name, id, email, Roel) {
        this.name = name;
        this.id = id;
        this.email = email;
      }

  }
  
  module.exports = Employee;