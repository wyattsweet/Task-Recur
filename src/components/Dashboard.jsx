import React from 'react';

import Header from './Header';
import Provider from './Provider';
import TaskSection from './TaskSection';
import TimeFrameGroup from './TimeFrameGroup';

const App = () => {
  return (
    <Provider>
      <Header />
      <TaskSection>
        <TimeFrameGroup group="daily" />
        <TimeFrameGroup group="weekly" />
        <TimeFrameGroup group="monthly" />
      </TaskSection>
    </Provider>
  );
};

export default App;
