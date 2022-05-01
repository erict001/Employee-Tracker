const inquirer = require('inquirer')
const fs = require('fs')
const console_table = require('console.table');
const mysql = require('mysql');
const { start } = require('repl');

const db = mysql.createConnection( //creating a connection to mySQL using the database "classlist_db"
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cms_db'
  },
  console.log(`Connected to the cms_db database.`),
  startPrompt()
);

function startPrompt() {
inquirer.prompt ([
    {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role"
        ]
    }
]).then ((answers) => {
    switch (answers.choice) {
        case "view all departments":
            allDepartments();
            break;
        case "view all roles":
            allRoles();
            break;
        case "view all employees":
            allEmployees();
            break;
        case "add a department":
            addDepartment();
            break;
        case "add a role":
            addRole();
            break;
        case "add an employee":
            addEmployee();
            break;
        case "update an employee":
            //create function
            break;
        case "quit":
            return;
        }
    })
}

// view all departments
function allDepartments() {
    db.query('SELECT id, department_name FROM department', function (err, results) {
        if(err) throw err
        console.table(results)
    });
    startPrompt();
}

// view all roles
function allRoles() {
    db.query('SELECT * FROM roles' , function (err, results) {
        if(err) throw err
        console.table(results)
        startPrompt();
    });
}

// view all employees
function allEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        if(err) throw err
        console.table(results)
        startPrompt();
    });
}

// add Department
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "addDepartmentName",
            message: "What is the department name that you'd like to add?"
        }
    ])
    db.query('INSERT addDepartmentName INTO department', function (err, results) {
        if(err) throw err
        console.table(results)
        startPrompt();
    });
}

// add a Role
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "addRoleName",
            message: "What role would you like to add?"
        },
        {
            type: "input",
            name: "addRoleSalary",
            message: "What is their salary?"
        },
        {
            type: "input",
            name: "addRoleDepartment",
            message: "What department is this role in?"
        }
    ])
    db.query('INSERT addRoleName, addRoleSalary, addRoleDepartment INTO roles', function (err, results) {
        if(err) throw err
        console.table(results)
        startPrompt();
    });
}

// add an Employee
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "addEmployeFirstName",
            message: "What is the new Employee's first name?"
        },
        {
            type: "input",
            name: "addEmployeLastName",
            message: "What is the new Employee's last name?"
        },
        {
            type: "input",
            name: "addEmployeeRole",
            message: "What is their role?"
        },
        {
            type: "input",
            name: "addEmployeeManager",
            message: "Who is their manager?"
        }        
    ]).then (function(value) {
        db.query('INSERT addEmployeFirstName, addEmployeLastName, addEmployeeRole, addEmployeeManager INTO employee', function (err, results) {
            if(err) throw err
            console.table(results)
            startPrompt();
        });
    })
    }