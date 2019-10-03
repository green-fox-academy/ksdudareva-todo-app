'use strict';

import { printUsageInfo } from "./printUsageInfo";
import { listTasks } from "./listTasks";
import { addTask } from "./addTask";

const fs = require('fs');

const args: string[] = process.argv;


let mainProcess = ():void => {

    if (args.length == 2) {
        printUsageInfo();
    } else if (args[2] == '-l') {
        let taskList: string = fs.readFileSync('taskList.txt', 'utf-8');
        if (taskList == '') {
            console.log('Nothing for today!');
        } else {
            listTasks(taskList);
        }
    } else if (args[2] == '-a') {
        if (args[3] === undefined) {
            console.log('Unable to add. No task provided');
        } else {
            addTask(args[3]);
        }
    } //else if ()


}
mainProcess();