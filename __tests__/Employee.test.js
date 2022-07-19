const Employee = require("../public/lib/Employe"); 
const inquirer = require('inquirer');

describe("Employee Test", () => {
    
  it("Output Role for the Employee should be the Employee", () => {
    const Role = "Employee"; 
    const employee = new Employee (); 
    expect(employee.getRole()).toBe(Role); 
}); 

it("Create UUID for this Eployee", () => {
    const employee = new Employee(); 
    expect(employee.getid()).not.toBe(null); 
}); 

it("Get Employee Questions Objects", () => {
  const employee = new Employee(); 
  expect(employee.getName()).not.toBe(null); 
}); 


});