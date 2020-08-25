// Business Logic for To Do List
function ToDoList() {
  this.tasks = [];
  this.taskId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDoList.prototype.assignId = function() {
  this.taskId++;
  return this.taskId;
}

ToDoList.prototype.findTask = function(id) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

ToDoList.prototype.deleteTask = function(id) {
  for (let i = 0; i < this.tasks.length; i++) {
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
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Tasks
function Task(taskName, taskDescription, dueDate) {
  this.taskName = taskName;
  this.taskDescription = taskDescription;
  this.dueDate = dueDate;
}

let tasks = new ToDoList();

function newTask(taskName, taskDescription, dueDate) {
  let task = new Task(taskName, taskDescription, dueDate);
  tasks.addTask(task);

  let last = tasks.taskId;
  alert(last);
  let name = "<div class=col-3>" + taskName + "</div>";
  let desc = "<div class=col-3>" + taskDescription + "</div>";
  let date = "<div class=col-3>" + dueDate + "</div>";

  let result = "<div id=task" + last + " class=row>" + name + desc + date + "</div>";

  return result;
}

// User Interface
$(document).ready(function() {
  $("#form-todo").submit(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    let input2 = $("input#input2").val();
    let input3 = $("input#input3").val();
    //let taskId = 0;
    let result = newTask(input1, input2, input3);

    $("#result").append(result);
  })
})