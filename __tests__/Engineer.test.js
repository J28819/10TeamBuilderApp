const Engineer = require("../public/lib/Engineer"); 

describe("Engineer Test", () => {
    
  it("Output Role for the Engineer should be the Engineer", () => {
    const Role = "Engineer"; 
    const employee = new Engineer (); 
    expect(employee.getRole()).toBe(Role); 
}); 

it("Create UUID for this Eployee", () => {
    const employee = new Engineer(); 
    expect(employee.getid()).not.toBe(null); 
}); 


});