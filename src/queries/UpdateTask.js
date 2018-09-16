import gql from 'graphql-tag'

export default gql`
  mutation UpdateTask($id: ID!, $title: String, $recurring: Boolean) {
    updateTask(input: {id: $id, title: $title, recurring: $recurring}) {
      id
      title
      active
      recurring
    }
  }
`
