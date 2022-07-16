const intern = require("../public/lib/Intern"); 

describe("Get Role from the Intern", () => {

  it("Output Role for the Intern Should be Intern", () => {
    const Role = "Intern"; 
    const employee = new intern (); 
    expect(employee.getRole()).toBe(Role); 
}); 

it("Create UUID for this Eployee", () => {
    const employee = new intern(); 
    expect(employee.getid()).not.toBe(null); 
}); 

});