import React from 'react'

import Header from './Header'
import Provider from './Provider'
import TaskSection from './TaskSection'
import TimeFrameGroup from './TimeFrameGroup'

// if there is a token stored in localStorage, pass the token to the server and request all of the users tasks.
// If 401 is returned – delete saved token and redirect to /login, component Authentication
class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider>
        <Header />
        <TaskSection>
          <TimeFrameGroup group="daily" />
          <TimeFrameGroup group="weekly" />
          <TimeFrameGroup group="monthly" />
        </TaskSection>
      </Provider>
    )
  }
}

export default Dashboard
