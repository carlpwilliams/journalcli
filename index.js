#!/usr/bin/env node
// JavaScript source code
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

console.info('running');
clear();

console.log(
  chalk.yellow(
    figlet.textSync('Jour', { horizontalLayout: 'full' })
  )
);

const run = async () => {
    console.info('reun whatevs.');
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
};

run();