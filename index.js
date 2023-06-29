const inquirer = require('inquirer')
const { Triangle, Circle, Square } = require('./models/shapes')
const fs = require('fs')

function showMenu() {
    inquirer.prompt([
        {
            message: 'Pick a shape',
            type: 'list',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            message: 'type a color for the shape',
            name: 'color'
        },
        {
            message: 'Type a color for the text',
            name: 'textColor'
        },
        {
            message: 'Type up to 3 characters',
            name: 'text'
        }

    ]).then(answer => {
        if (answer.shape === "Circle") {
            const shape = new Circle(answer.color, answer.textColor, answer.text)

            writeToFile(shape.render())
        } else if (answer.shape === "Square") {
            const shape = new Square(answer.color, answer.textColor, answer.text)

            writeToFile(shape.render())
        } else if (answer.shape === "Triangle") {
            const shape = new Triangle(answer.color, answer.textColor, answer.text)

            writeToFile(shape.render())
        }
    })
  }

  function writeToFile(render) {
    fs.writeFile('./example/logo.svg', render, err => {
        if (err) throw err
        console.log('Generated logo.svg')
    })
  }

  showMenu()