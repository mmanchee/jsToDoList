// Business Logic for To Do List
function ToDoList() {
  this.tasks = []
  this.taskId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDoList.prototype.assignId = function() {
  this.taskId += 1;
  return this.taskId;
}



// Business Logic for Tasks
function Task(taskNmae, taskDescription, phoneNumber) {
  this.taskNmae = taskNmae,
  this.taskDescription = taskDescription,
  this.dueDate = dueDate
}