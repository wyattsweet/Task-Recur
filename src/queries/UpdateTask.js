import gql from 'graphql-tag'

export default gql`
  mutation UpdateTask($id: ID!, $title: String, $recurring: Boolean, $occurrences: Int) {
    updateTask(input: {id: $id, title: $title, recurring: $recurring, occurrences: $occurrences}) {
      id
      title
      active
      recurring
      occurrences
    }
  }
`
