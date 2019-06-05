#!/usr/bin/env node
// JavaScript source code
require = require('esm')(module /*, options*/);


const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const journal = require('./journal.js');

const Listr = require('listr');

var inquirer = require('inquirer');


let lastMessage = 'Running';

const run = async () => {
  // clear();

  console.log(
    chalk.yellow(
      figlet.textSync('Journal CLI', { horizontalLayout: 'full' })
    )
  );
  console.log(
    chalk.yellow(
      lastMessage
    )
  );
  
  newPrompt().then(answer => {
    if (answer === '') {
      edit();
    }
    else {
      journal.addNewEntry(answer.entry.split(' '));
    }
    run();
  });

  // //console.info(process);
  // //process.argv[2]
  // const [, , ...args] = process.argv;
  // switch (args[0]) {
  //   case ".":
  //     console.info(chalk.yellow('task added ') + args.join(" "));
  //     break;
  //   case "!":
  //     console.info(chalk.yellow('fact added ') + args.join(" "));
  //     break;
  // }
  // //args.forEach(function (val, index, array) {
  // //    console.log(index + ': ' + val);
  // //});
};


const newPrompt = async () => {
  return new Promise((resolve, reject) => {
    console.log(chalk.blue('Your Current Journal'));
    journal.getJournal().then(res => {
      console.info(res);
      inquirer
        .prompt([
          {
            type: 'entry',
            name: 'entry',
            choices:['a':'test'],
            message: 'New Entry'
          },
        ])
        .then(answers => {
          // Use user feedback for... whatever!!
          resolve(answers);
        });
    });
  });
}


const edit = async () => {
  const questions = [];
  questions.push({
    type: 'list',
    name: 'template',
    message: 'Please choose which project template to use',
    choices: ['JavaScript', 'TypeScript'],
  });


  const answers = await inquirer.prompt(questions);

}



run();