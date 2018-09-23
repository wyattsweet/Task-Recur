import gql from 'graphql-tag'

import itemFields from './ItemFragment'

export default gql`
query ListTasks {
  listTasks(filter: {active: { eq: true}}) {
    items {
      ...itemFields
    }
  }
}
${itemFields}
`
