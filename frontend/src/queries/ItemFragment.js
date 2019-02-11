import gql from 'graphql-tag'

const ItemFieldsFragment = gql`
  fragment itemFields on ListTasks {
    id
    active
    occurrences
    recurring
    title
  }
`

export default ItemFieldsFragment
