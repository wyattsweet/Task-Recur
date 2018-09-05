import gql from 'graphql-tag'

export default gql`
  subscription CreateTaskSub {
    onCreateTask {
      id
      active
      title
    } 
  }
`
