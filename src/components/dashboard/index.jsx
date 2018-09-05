import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'

import AppSyncClient from '../../config/AppSync'
import Dashboard from './Dashboard'

const DashbaordContainer = () => (
  <ApolloProvider client={AppSyncClient}>
    <Rehydrated>
      <Dashboard /> 
    </Rehydrated>
  </ApolloProvider>
)

export default DashbaordContainer
