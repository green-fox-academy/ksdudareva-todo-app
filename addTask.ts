'use strict';

const fs = require('fs');
const args: string[] = process.argv;

let taskList: string = fs.readFileSync('taskList.txt', 'utf-8');


export function addTask(): void {
    taskList = fs.appendFileSync('taskList.txt', '\n' + args[3], 'utf-8');
}
