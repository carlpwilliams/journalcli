#!/usr/bin/env node
// JavaScript source code
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

console.info('running');
clear();

console.log(
  chalk.yellow(
    figlet.textSync('Carl Jour', { horizontalLayout: 'full' })
  )
);

const run = async () => {
    console.info('run whatevs.');
    //console.info(process);
    //process.argv[2]
    const [, , ...args] = process.argv;
    switch (args[0]) {
        case ".":
            console.info(chalk.yellow('task added ') + args.join(" "));
            break;
        case "!":
            console.info(chalk.yellow('fact added ') + args.join(" "));
            break;
    }
    //args.forEach(function (val, index, array) {
    //    console.log(index + ': ' + val);
    //});
};

run();