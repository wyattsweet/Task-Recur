import gql from 'graphql-tag'

export default gql`
  mutation UpdateTask($id: ID!, $title: String) {
    updateTask(input: {id: $id, title: $title}) {
      id
      title
    }
  }
`
