import React from 'react';

import AddButton from './AddButton';
import EditTask from './EditTask';
import Task from './Task';
import { MyContext } from './Provider';
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

const TimeFrameGroup = ({ group, inputRef, tasks }) => {
  return (
    <MyContext.Consumer>
      {context => {
        const { editTaskWithId } = context;
        return (
          <article className={styles.taskGroup}>
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
                return (
                  <li key={`${taskReset.title}`} className={styles.task}>
                    {editTaskWithId == task.id ? (
                      <EditTask
                        id={task.id}
                        key={taskReset.title}
                        value={taskReset.title}
                      />
                    ) : (
                      <Task task={taskReset} />
                    )}
                  </li>
                );
              })}
              <AddButton group={group} inputRef={inputRef} />
            </ul>
          </article>
        );
      }}
    </MyContext.Consumer>
  );
};

export default TimeFrameGroup;
