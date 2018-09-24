import React from 'react'
import { times } from 'lodash'

import { generateUniqId } from '../../../../helpers/utils'

import DecrementOccurrence from './DecrementOccurrence'
import IncrementOccurrence from './IncrementOccurrence'

class Occurrences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      occurrences: props.task.occurrences
    }
  }

  handleUpdate = (occurrences) => {
    const newTask = {
      ...this.props.task,
      occurrences
    }
    this.setState({ occurrences }, () => {
      this.props.onUpdate(newTask)
    })
  }

  handleIncrement = () => {
    const { occurrences } = this.state
    const updatedCount = occurrences + 1
    this.handleUpdate(updatedCount)
  }

  handleDecrement = () => {
    const { occurrences } = this.state
    const updatedCount = occurrences - 1
    if (updatedCount > 0) {
      this.handleUpdate(updatedCount)
    }
  }

  render() {
    const { occurrences } = this.state
    return (
      <React.Fragment>
      <DecrementOccurrence onClick={this.handleDecrement} />
      {times(occurrences, () => <input key={generateUniqId()} type="checkbox" />)}
      <IncrementOccurrence onClick={this.handleIncrement} />
      </React.Fragment>
    )
  }
}

export default Occurrences
