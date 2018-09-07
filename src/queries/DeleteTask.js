import gql from 'graphql-tag'

export default gql`
  mutation DeleteTaskMutation($id: ID!) {
    deleteTask(input: {id: $id}) {
      id
      title
    }
  }
`
