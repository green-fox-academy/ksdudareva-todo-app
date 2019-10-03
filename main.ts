'use strict';


const fs = require('fs');

const args: string[] = process.argv;

import { printUsageInfo } from "./printUsageInfo";
import { listTasks } from "./listTasks";
import { addTask } from "./addTask";

let taskList: string = fs.readFileSync('taskList.txt', 'utf-8');


let mainProcess = () => {

    if (args.length == 2) {
        console.log(printUsageInfo());
    } else if (args[2] == '-l') {
        if (taskList == '') {
            console.log('Nothing for today!');
        } else {
            console.log(listTasks());
        }
    } else if (args[2] == '-a') {
        if (args[3] === undefined) {
            console.log('Unable to add. No task provided');
        } else {
            console.log(addTask());
        }
    } 


}
mainProcess();