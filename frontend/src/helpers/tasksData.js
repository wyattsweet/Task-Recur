const parse = json => JSON.parse(json);
const stringify = obj => JSON.stringify(obj);
let tasks;

export function getAllTasks() {
  const localStorageRes = localStorage.getItem('tasks');
  tasks = localStorageRes ? parse(localStorageRes) : [];
  //  parsedTasks.forEach(task => {
  //    store.dispatch(addTask(task))
  //  })
  return tasks;
}

export function postTask(taskList, newTask) {
  const newTaskList = [...taskList, newTask];
  localStorage.setItem('tasks', stringify(newTaskList));
  getAllTasks();
}

function getTask(taskId) {
  let taskList = tasks;
  taskList = taskList.filter(task => {
    return task.id == taskId;
  });
  if (taskList.length < 1) {
    return null;
  }
  return taskList[0];
}

export function updateTask(updatedTask) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (updatedTask.id == tasks[i].id) {
      tasks[i] = { ...tasks[i], ...updatedTask };
    }
  }
  localStorage.setItem('tasks', stringify(tasks));
  getAllTasks();
}

export function deleteTask(id) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (id == tasks[i].id) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem('tasks', stringify(tasks));
  getAllTasks();
}

const checkTaskCompletion = task => {
  const updatedTask = task;
  updatedTask.complete = updatedTask.occurrencesRemaining == 0;
  return updatedTask;
};

export function incrementOccurrences(taskId) {
  const task = getTask(taskId);
  task.occurrences += 1;
  task.occurrencesRemaining += 1;
  updateTask(checkTaskCompletion(task));
}

export function decrementOccurrences(taskId) {
  const task = getTask(taskId);
  if (task.occurrencesRemaining > 0) {
    task.occurrences = task.occurrences - 1 < 1 ? 1 : (task.occurrences -= 1);
    task.occurrencesRemaining =
      task.occurrencesRemaining - 1 < 1 ? 1 : (task.occurrencesRemaining -= 1);
    updateTask(checkTaskCompletion(task));
  }
}

export function incrementRemainingOccurrences(taskId) {
  const task = getTask(taskId);
  task.occurrencesRemaining += 1;
  task.complete = task.occurrencesRemaining == 0;
  updateTask(checkTaskCompletion(task));
}

export function decrementRemainingOccurrences(taskId) {
  const task = getTask(taskId);
  task.occurrencesRemaining -= 1;
  task.complete = task.occurrencesRemaining == 0;
  updateTask(checkTaskCompletion(task));
}
