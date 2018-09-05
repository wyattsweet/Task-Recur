import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'

import AppSyncClient from '../../config/AppSync'
import Dashboard from './Dashboard'
import WithData from '../shared/WithData' 

const DashboardWithData = WithData(Dashboard)
const DashbaordContainer = () => (
  <ApolloProvider client={AppSyncClient}>
    <Rehydrated>
      <DashboardWithData /> 
    </Rehydrated>
  </ApolloProvider>
)

export default DashbaordContainer
