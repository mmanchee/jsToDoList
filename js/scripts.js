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

ToDoList.prototype.updateTask = function(id, taskName, taskDescription, dueDate) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        if (taskName != "") {
          this.tasks[i].taskName = taskName;
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
function Task(taskName, taskDescription, dueDate) {
  this.taskName = taskName;
  this.taskDescription = taskDescription;
  this.dueDate = dueDate;
}

function newTask(taskName, taskDescription, dueDate) {
  let tasks = new ToDoList();
  let task = new Task(taskName, taskDescription, dueDate);
  tasks.addTask(task);

  let last = tasks.taskId;

  let name = "<div class=col-4>" + taskName + "</div>";
  let desc = "<div class=col-4>" + taskDescription + "</div>";
  let date = "<div class=col-4>" + dueDate + "</div>";
  let title = "<div onclick=showHide(" + last + ")>" + name + "</div>";

  let result = title + "<div id=location" + last + " class=row>" + name + desc + date + "</div>";

  return result;
}

// User Interface
$(document).ready(function() {
  $("").submit(function(event) {
    event.preventDefault();
    let input1 = $("input#").val();
    let input2 = $("input#").val();
    let input3 = $("input#").val();

    let result = newTask(input1, input2, input3);

    $("#result").append(result);
  })
})