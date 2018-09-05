import AWSAppSyncClient from 'aws-appsync'
import React from 'react'

import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'
import { Rehydrated } from 'aws-appsync-react'
import { graphql, ApolloProvider, compose } from 'react-apollo'

import AddTask from './AddTask'
import AllTasksQuery from '../../queries/AllTasksQuery'
import AppSync from '../../config/AppSync'
import Header from '../Header'
import Tabs from './Tabs'
import Tab from './Tabs/Tab'
import TabContent from './Tabs/TabContent'
import TabRow from './Tabs/TabRow'
import Task from './Task'
import TaskWrapper from './TaskWrapper'

import styles from './dashboard.css'

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey,
  },
})

const Dashboard = () => {
  return (
    <div className={styles.root}>
      <Header />
      <TabsWithData>
        <TabRow>
          <Tab label="daily" />
          <Tab label="weekly" />
          <Tab label="monthly" />
        </TabRow>
        <TabContent>
          <TaskWrapper>
            <Task title="Hang Shelves" />
          </TaskWrapper>
          <TaskWrapper>
            <Task title="Something else" />
          </TaskWrapper>
          <TaskWrapper>
            <AddTask />
          </TaskWrapper>
        </TabContent>
      </TabsWithData>
    </div>
  )
}

const TabsWithData = compose(
  graphql(AllTasksQuery, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
      tasks: props.data.listTasks.items
    })
  }),
)(Tabs)

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <Dashboard /> 
    </Rehydrated>
  </ApolloProvider>
)

export default WithProvider
