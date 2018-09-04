`mutation CreateTask {
  createTask(input: {
    title: "test task",
    timeframe: weekly,
    occurrences: 1,
    occurrencesRemaining: 1,
    complete: false,
    active: true,
    recurring: true
  }) {
    title
    timeframe
    occurrences
  }
}`
