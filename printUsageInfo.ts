'use strict';

const fs = require('fs');
const args: string[] = process.argv;

export function printUsageInfo(): void {
    console.log("Command Line Todo application\n =============================\n Command line arguments:\n -l   Lists all the tasks \n -a   Adds a new task\n -r   Removes a task\n -c   Completes a task")
}