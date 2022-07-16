const Manager = require("../public/lib/Manager"); 

describe("Get Role from Manager", () => {
  it("Output Manager Role should be Manager", () => {
    const Role = "Manager"; 
    const employee = new Manager (); 
    expect(employee.getRole()).toBe(Role); 
}); 

it("Create UUID for this Eployee", () => {
    const employee = new Manager(); 
    expect(employee.getid()).not.toBe(null); 
}); 

});