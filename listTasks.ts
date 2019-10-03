'use strict';

export function listTasks(taskList: string): void {
    const taskListSplit: string[] = taskList.split('\n');
    let index: number = 1;
    taskListSplit.forEach(element => {
        console.log(index + " " + element);
        index++;
    });
}
