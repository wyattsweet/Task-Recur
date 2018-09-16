import gql from 'graphql-tag'

export default gql`
query ListTasks {
  listTasks(filter: {active: { eq: true}}) {
    items {
      id
      active
      title
      recurring
    }
  }
}
`
