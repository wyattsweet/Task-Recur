import React from 'react'
import { times } from 'lodash'

import { generateUniqId } from '../../../../helpers/utils'

import DecrementOccurrence from './DecrementOccurrence'
import IncrementOccurrence from './IncrementOccurrence'

class Occurrences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      occurrences: props.occurrences
    }
  }
  handleIncrement = () => {
    const { occurrences } = this.state
    const updatedCount = occurrences + 1
    this.setState({ occurrences: updatedCount })
  }

  render() {
    const { occurrences } = this.state
    return (
      <React.Fragment>
      <DecrementOccurrence />
      {times(occurrences, () => <input key={generateUniqId()} type="checkbox" />)}
      <IncrementOccurrence onClick={this.handleIncrement} />
      </React.Fragment>
    )
  }
}

export default Occurrences
