import gql from 'graphql-tag'

export default gql`
  fragment itemFields on Item {
    active
    id
    occurrences
    recurring
    title
  }
`
