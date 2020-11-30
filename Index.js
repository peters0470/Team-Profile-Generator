const fs = require('fs');
const inquirer = require('inquirer');
const generateCards = require('./src/generatecards');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [],

const questions = {

    manager: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager? \n',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        }, 
        
        {
            type: 'number',
            name: 'id',
            message: "What is the employee's ID number? \n",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter an ID number.');
                    return false;
                }
            }
        },

        {
            
        }
    ]
}