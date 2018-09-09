import gql from 'graphql-tag'

export default gql`
  mutation DeactivateTask($id: ID!) {
    updateTask(input: {id: $id, active: false}) {
      id
      title
      active
    }
  }
`
