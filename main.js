class ToDoList {

    constructor() {

        this.todos = []

    };

    addTodo(task) {
        this.todos.push(task)
    };

    removeTodo(id) {
        this.todos = this.todos.filter(function (listItem) {
            return listItem.id !== id;
        })
    };

    showCompletedTasks() {
        return this.todos.filter(function (listItem) {
            return listItem.status === true;
        })
    };

    showInProgressTask() {
        return this.todos.filter(function (listItem) {
            return listItem.status === false;
        })
    };

    changeStatus(id, status) {
        return this.todos.map(function (listItem) {
            if (listItem.id === id) {
                listItem.status = status;
            }
            return listItem;
        })
    };

    findTasks(string) {
        return this.todos.includes((listItem) => {
            if (listItem.task.includes(string)) {
                return listItem;
            }
        })
    };

    moveUp(id) {
        let itemIndex = this.todos.findIndex((listItem) => listItem.id === id);
        let findTask = this.todos[itemIndex];
        let previousTask = this.todos[itemIndex - 1];
        if (itemIndex - 1 >= 0) {
            this.todos.splice(itemIndex - 1, itemIndex, findTask, previousTask);
        };
    };

    moveDown(id) {
        let itemIndex = this.todos.findIndex((listItem) => listItem.id === id);
        let findTask = this.todos[itemIndex];
        let nextTask = this.todos[itemIndex + 1];
        this.todos.splice(itemIndex, itemIndex + 1, nextTask, findTask);
    };
};

let toDoList = new ToDoList();

class Task {

    constructor(task, status, id) {
        this.task = task
        this.status = status
        this.id = id
    }

};

let task1 = new Task('to buy milk', true, 'task1');
let task2 = new Task('to buy bread', true, 'task2');
let task3 = new Task('to buy salt', false, 'task3');
let task4 = new Task('to buy sugar', false, 'task4');

toDoList.addTodo(task1);
toDoList.addTodo(task2);
toDoList.addTodo(task3);
toDoList.addTodo(task4);


console.log(toDoList.findTasks('salt'));
console.log(toDoList.changeStatus('task3', false));
toDoList.moveDown('task2');
console.log('Опускаем таску 2 вниз ', toDoList.todos);
toDoList.moveDown('task2');
console.log('Опускаем таску 2 вниз ', toDoList.todos);
toDoList.moveUp('task4');
console.log('Поднимаем таску 4 вверх ', toDoList.todos);
/* console.log(toDoList.todos) */
/*  // Меняем статус первой таске
toDoList.changeStatus('task1', false);

// Находим таски которые включают букву a
console.log('Находим таски которые включают букву a', toDoList.findTasks('a'));

// Поднимаем таску 4 вверх
toDoList.moveUp('task4');
console.log('Поднимаем таску 4 вверх ', toDoList.todos);

// Опускаем таску 2 вниз
toDoList.moveDown('task2');
console.log('Опускаем таску 2 вниз ', toDoList.todos);
 */