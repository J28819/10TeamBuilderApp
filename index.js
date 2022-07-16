const express = require('express');
const inquirer = require('inquirer');
var fs = require('fs');

const app = express();
const PORT = 3001;
const path = require('path');
const Intern = require('./public/lib/Intern');
const Engineer = require('./public/lib/Engineer');
const Manager = require('./public/lib/Manager');
app.use(express.static('public'))
var cardsarray = []
var EmployeecastcardsM = ""
var EmployeecastcardsE = ""
var EmployeecastcardsI = ""


console.log( '---------------------------------------------------------\n');
console.log('\x1b[36m%s\x1b[0m', 'Hi, welcome to Pro 10TeamBuilderApp v1.0.0 by Ismael Leal   |\n');
console.log('\x1b[36m%s\x1b[0m', 'GitHub Project: https://github.com/J28819/10TeamBuilderApp.git\n');
console.log('\x1b[36m%s\x1b[0m',' ---Follow the instructions and questions to create your Team HTML file ---\n');
console.log('---------------------------------------------------------\n');


app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/json', express.static(path.join(__dirname, 'public/json')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})
 
 const questions = [
  {
    type: 'list',
    name: 'Etype',
    message: '\033[0;32m\Chose one Employee type from the list or None to exit',
    choices: ["Intern", "Engineer", "Manager", "Finish" ],
  }
 ];

start()

function addManager(){
  console.log("This is the Manager")
  const newManager = new Manager()
  let reactives = []
  reactives.push(newManager.getName(),newManager.getEmail(),newManager.getOfficeNumber())
  inquirer.prompt(reactives)
  .then(
    (answers) => {

      EmployeecastcardsM += `<div class="col-sm-2">
      <h5 class="card-title text-center">${answers.name} : ${newManager.getRole()}</h5>
      <div class="card" style="width: 18rem; background-color: #5abaed;">
        <img class="card-img-top" src="./img/Manager1.png" style="border-radius: 1rem; margin-bottom: 8px; " alt="Card image cap" width="173px" height="120px">
        <div class="card-body" >
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${answers.name}</li>
            <li class="list-group-item"> <a href = "mailto:${answers.email}?subject = Feedback&body = Message">email: <span>${answers.email}</span> </a></li>
            <li class="list-group-item"><a href = "#">GitHub: ${answers.UserName} </a></li>
          </ul>
        </div>
        <hr>
        <h5 class="card-title text-center">ID. ${newManager.getid()}</h5>
      </div>
      </div>`
      
      //console.log(answers)
      start()
    }
  )
}




function addEngineer(){
  console.log("This is the Engineer")
  const newEngineer = new Engineer()
  let reactives = []
  reactives.push(newEngineer.getName(),newEngineer.getEmail(),newEngineer.getUserName())
  inquirer.prompt(reactives)
  .then(
    (answers) => {
      ActualRol = newEngineer.getRole()
      //answers.push(ActualRol)
      cardsarray.push(answers)
      console.log(cardsarray)

      EmployeecastcardsE += `<div class="col-sm-2">
      <h5 class="card-title text-center">${answers.name} : ${newEngineer.getRole()}</h5>
      <div class="card" style="width: 18rem; background-color: #87b76e;">
        <img class="card-img-top" src="./img/Engineer.png" style="border-radius: 1rem; margin-bottom: 8px; " alt="Card image cap" width="173px" height="120px">
        <div class="card-body" >
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${answers.name}</li>
            <li class="list-group-item"> <a href = "mailto:${answers.email}?subject = Feedback&body = Message">email: <span>${answers.email}</span> </a></li>
            <li class="list-group-item"><a href = "https://github.com/${answers.userName}">GitHub: ${answers.userName} </a></li>
          </ul>
        </div>
        <hr>
        <h5 class="card-title text-center">ID. ${newEngineer.getid()}</h5>
      </div>
      </div>`
      //console.log(EmployeecastcardsE)
      start()
    }
  )
}

function addintern(){
  let Ecard = `HTML Card Values`
  console.log("This is the Intern")
  const newIntern = new Intern()
  let reactives = []
  reactives.push(newIntern.getName(),newIntern.getEmail(),newIntern.getSchool())
  inquirer.prompt(reactives)
  .then(
    (answers) => {

      EmployeecastcardsI +=  ` <div class="col-sm-2">
      <h5 class="card-title text-center">${answers.name} : ${newIntern.getRole()}</h5>
      <div class="card" style="width: 18rem; background-color: #87bbe0;">
        <img class="card-img-top" src="./img/Intern.png" style="border-radius: 1rem; margin-bottom: 8px; " alt="Card image cap" width="173px" height="120px">
        <div class="card-body" >
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${answers.name}</li>
            <li class="list-group-item"> <a href = "mailto:${answers.email}?subject = Feedback&body = Message">email: <span>${answers.email}</span> </a></li>
            <li class="list-group-item"><a href = "#">School: ${answers.school} </a></li>
          </ul>
        </div>
        <hr>
        <h5 class="card-title text-center">ID. ${newIntern.getid()}</h5>
      </div>
      </div>`
     
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


        var htmlfileraw = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <title>10TeamBuilderApp</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" type="text/css" href="./css/style.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
        </head>
        <section class="container-fluid" style="background-image: url(./img/TopBanner.png)">
            <h2>J28819/10TeamBuilderApp</h2>
            <p>This team was made by the Node console.</p>
        </section >
        <body>
        <div class="container-fluid">
          <div class="row content">
            <div class="col-sm-9">
              <div class="row">
                <div class="container">
                </div>
              <div class="panel-body">
              <h2>Meet the Team</h2>
          </div>
          <hr>
          </div>
              <div id="teamManager" class="row">
              ${EmployeecastcardsM}
                </div>
              <div id="teamEngineer" class="row">
              ${EmployeecastcardsE}
                </div>
              <div id="teamIntern" class="row">
              ${EmployeecastcardsI}
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="./assets/dist/teleport-autocomplete.js"></script>
        <script src="./assets/js/weatherapp.js"></script>
        <script src="./assets/js/localstorage.js"></script>
        <footer class="container-fluid">
          <p>GitHub Repo: <span><a href = "mailto:lelj28819@gmail.com?subject = Feedback&body = Contact"> <span><p>J28819/10TeamBuilderApp @ Jul 2022</p></span> </a></span></p>
          <p>Contact: </p><a href = "mailto:lelj28819@gmail.com?subject = Feedback&body = Contact">Contact: <span>lelj28819@gmail.com</span> </a>
        </footer>
        </body>
        </html>
        
        `

    //writeFile function with filename, content and callback function
    fs.writeFile('./public/index.html', htmlfileraw, function (err) {
    if (err) throw err;
       console.log('Your file is ready and you can access it here: localhost:3001/index.html');
      });
      }

      app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
      break;
    }
    
    }
 

 
 );

 
  }