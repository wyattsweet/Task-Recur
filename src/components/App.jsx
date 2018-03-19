import React from 'react';

import Header from './Header';
import TaskSection from './TaskSection';
import TimeFrameGroup from './TimeFrameGroup';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <TaskSection>
        <TimeFrameGroup group="daily" />
        <TimeFrameGroup group="weekly" />
        <TimeFrameGroup group="monthly" />
      </TaskSection>
    </React.Fragment>
  );
};

export default App;
