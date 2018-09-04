import gql from 'graphql-tag'

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
