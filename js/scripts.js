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

ToDoList.prototype.findTask = function(id) {
  for (let i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

ToDoList.prototype.deleteTask = function(id) {
  for (let i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

// addressBook.updateContact(1, 0, 0, 555-666-1212)

ToDoList.prototype.updateTask = function(id, taskNmae, taskDescription, dueDate) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        if (taskNmae != "") {
          this.tasks[i].taskNmae = taskNmae;
        }
        if (taskDescription != "") {
          this.tasks[i].taskDescription = taskDescription;
        }
        if (dueDate != "") {
          this.tasks[i].dueDate = dueDate;
        }
      }
    }
  }
}

// Business Logic for Tasks
function Task(taskNmae, taskDescription, phoneNumber) {
  this.taskNmae = taskNmae,
  this.taskDescription = taskDescription,
  this.dueDate = dueDate
}