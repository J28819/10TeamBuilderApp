const express = require('express');
const inquirer = require('inquirer');
var fs = require('fs');

const app = express();
const PORT = 3001;
const path = require('path');
const internal = require('stream');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
var cardsarrayEE = []
var cardsarrayEI = []
var cardsarrayEM = []
var Employeecastcards = ""

 
 const questions = [
  {
    type: 'list',
    name: 'Etype',
    message: '\033[0;32m\Chose one Employee type from the list or None to exit',
    choices: ["Intern", "Engineer", "Manager", "Finish" ],
  }
 ];




start()


function addintern(){
  let Ecard = `HTML Card Values`
  console.log("This is the Intern")
  const newIntern = new Intern()
  let reactives = []
  reactives.push(newIntern.getName(),newIntern.getEmail(),newIntern.getid(),newIntern.getSchool())
  inquirer.prompt(reactives)
  .then(
    (answers) => {
      console.log(answers)
      start()
    }
  )
}

function addEngineer(){
  console.log("This is the Engineer")
  const newEngineer = new Engineer()
  let reactives = []
  reactives.push(newEngineer.getName(),newEngineer.getEmail(),newEngineer.getid(),newEngineer.getUserName())
  inquirer.prompt(reactives)
  .then(
    (answers) => {
      ActualRol = newEngineer.getRole()
      //answers.push(ActualRol)
      cardsarrayE.push(answers)
      console.log(cardsarrayE)
      start()
    }
  )
}

function addManager(){
  console.log("This is the Manager")
  const newManager = new Manager()
  let reactives = []
  reactives.push(newManager.getName(),newManager.getEmail(),newManager.getid(),newManager.getOfficeNumber())
  inquirer.prompt(reactives)
  .then(
    (answers) => {
      console.log(answers)
      start()
    }
  )
}

function start(){
 inquirer.prompt(questions).then(
  (answers) => {
    switch (answers.Etype) {
      case "Intern": {
       addintern()
      }
      break;
      case "Engineer": {
        addEngineer()
        
      }
      break;
      case "Manager": {
        addManager()
        
      }
      break;
      case "Finish": {
        console.log("Building HTML file with all the cards.")

    // writeFile function with filename, content and callback function
    // fs.writeFile('README.md', readmetext, function (err) {
    //     if (err) throw err;
    //     console.log('File is created successfully.');
    //   });
      }
      break;
    }
    
    }
 

 
 );

 
  }