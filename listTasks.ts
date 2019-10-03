'use strict';

const fs = require('fs');
const args: string[] = process.argv;

let taskList: string = fs.readFileSync('taskList.txt', 'utf-8');
const taskListSplit: string[] = taskList.split('\n');


export function listTasks(): void {
    let index: number = 1;
    taskListSplit.forEach(element => {
        console.log(index + " " + element);
        index++;
    });
}
