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
  state = {
    clientReady: false
  }

  componentDidMount() {
    fetch(`${AppSync.graphqlEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': AppSync.apiKey,
      },
      body: JSON.stringify({
        variables: {},
        operationName: '',
        query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
      }),
    })
    .then(result => result.json())
    .then(result => {
      const data = JSON.stringify(result.data) 
      const fragmentMatcher = new IntrospectionFragmentMatcher({ data })
      const cache = new InMemoryCache({ fragmentMatcher })
      this.AppSyncClient = new AWSAppSyncClient({
        auth: {
          type: AUTH_TYPE.API_KEY,
          apiKey: AppSync.apiKey,
        },
        region: AppSync.region,
        url: AppSync.graphqlEndpoint,
      }, { cache })
      this.setState({ clientReady: true })
    })
  }

  render() {
    return this.state.clientReady ? (
      <ApolloProvider client={this.AppSyncClient}>
        <Rehydrated>
          <DashboardWithData />
        </Rehydrated>
      </ApolloProvider>
    ) : null
  }
}

export default DashbaordContainer
