import gql from 'graphql-tag'

// TODO: listTasks should be – listTasks(filter: {active: { eq: true}}) {
export default gql`
query ListTasks {
  listTasks {
    items {
      id
      active
      title
    }
  }
}
`
