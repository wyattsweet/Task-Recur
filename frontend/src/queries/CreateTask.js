import gql from 'graphql-tag'

export default gql`mutation CreateTask($title: String) {
  createTask(input: {
    title: $title,
    timeframe: weekly,
    occurrences: 1,
    occurrencesRemaining: 1,
    complete: false,
    active: true,
    recurring: false
  }) {
    id
    active
    occurrences
    recurring
    title
  }
}`
