import React from 'react';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import Occurrences from './Occurrences';
import Toggle from './Toggle';

import { MyContext } from './Provider';

const Task = ({ task }) => {
  const {
    id,
    occurrences,
    occurrencesRemaining,
    recurring,
    title,
    timeFrame
  } = task;
  return (
    <MyContext.Consumer>
      {context => {
        const {
          checkboxOnClick,
          decrementOnClick,
          incrementOnClick,
          onDeleteClick,
          setTaskToEdit,
          toggleOnClick
        } = context;
        return (
          <li>
            {title}
            <Occurrences
              checkboxOnClick={checkboxOnClick}
              decrementOnClick={decrementOnClick}
              id={id}
              incrementOnClick={incrementOnClick}
              occurrences={occurrences}
              occurrencesRemaining={occurrencesRemaining}
              timeFrame={timeFrame}
            />
            <Toggle taskId={id} onClick={toggleOnClick} recurring={recurring} />
            <EditButton setTaskToEdit={setTaskToEdit} id={id} />
            <DeleteButton id={id} onClick={onDeleteClick} />
          </li>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Task;
