'use strict';

const fs = require('fs');

export function addTask(task: string): void {
    fs.appendFileSync('taskList.txt', '\n' + task, 'utf-8');
}
