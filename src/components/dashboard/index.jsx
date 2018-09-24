import AWSAppSyncClient from 'aws-appsync'
import React from 'react'
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory'

import { AppSync } from '../../config/AppSync'
import Dashboard from './Dashboard'
import WithData from '../shared/WithData'

const DashboardWithData = WithData(Dashboard)
class DashbaordContainer extends React.Component {
  render() {
    const AppSyncClient = new AWSAppSyncClient({
      auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AppSync.apiKey,
      },
      region: AppSync.region,
      url: AppSync.graphqlEndpoint,
    })
    return (
      <ApolloProvider client={AppSyncClient}>
        <Rehydrated>
          <DashboardWithData />
        </Rehydrated>
      </ApolloProvider>
    )
  }
}

export default DashbaordContainer
