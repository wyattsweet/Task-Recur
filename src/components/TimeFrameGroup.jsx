import React from 'react';

import AddButton from './AddButton';
import EditTask from './EditTask';
import Task from './Task';
import { updateTask } from '../helpers/tasksData';
import {
  isNewDay,
  isNewMonth,
  isNewWeek,
  postNewDay,
  postNewMonth,
  postNewWeek
} from '../helpers/time';

import styles from './TimeFrameGroup.css';

const TimeFrameGroup = ({
  addTask,
  cancelSetTaskToEdit,
  checkboxOnClick,
  decrementOnClick,
  editTaskWithId,
  editTaskSubmit,
  group,
  incrementOnClick,
  inputRef,
  newTaskFormHidden,
  onAddButtonClick,
  onDeleteClick,
  setTaskToEdit,
  tasks,
  toggleOnClick
}) => {
  const checkRecurrence = (task, chkFn) => {
    const reset = chkFn();
    const alteredTask = task;
    if (reset && alteredTask.recurring) {
      alteredTask.occurrencesRemaining = alteredTask.occurrences;
      alteredTask.complete = false;
      updateTask(alteredTask);
    }
    return alteredTask;
  };

  return (
    <article>
      <h2 className={styles.title}>{`${group} Tasks`}</h2>
      <ul>
        {tasks.map((task, index) => {
          let chkFn;
          let resetTime;
          if (group === 'daily') {
            chkFn = isNewDay;
            resetTime = postNewDay;
          } else if (group === 'weekly') {
            chkFn = isNewWeek;
            resetTime = postNewWeek;
          } else {
            chkFn = isNewMonth;
            resetTime = postNewMonth;
          }
          const taskReset = checkRecurrence(task, chkFn);
          if (index == tasks.length - 1 && chkFn()) {
            resetTime();
          }
          return editTaskWithId == task.id ? (
            <EditTask
              cancelOnClick={cancelSetTaskToEdit}
              editTaskSubmit={editTaskSubmit}
              id={task.id}
              key={taskReset.title}
              value={taskReset.title}
            />
          ) : (
            <Task
              checkboxOnClick={checkboxOnClick}
              key={`${taskReset.title}`}
              task={taskReset}
              decrementOnClick={decrementOnClick}
              onDeleteClick={onDeleteClick}
              setTaskToEdit={setTaskToEdit}
              incrementOnClick={incrementOnClick}
              toggleOnClick={toggleOnClick}
            />
          );
        })}
        <AddButton
          addTask={addTask}
          newTaskFormHidden={newTaskFormHidden}
          onAddButtonClick={onAddButtonClick}
          group={group}
          inputRef={inputRef}
        />
      </ul>
    </article>
  );
};

export default TimeFrameGroup;
