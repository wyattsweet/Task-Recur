import React from 'react'

import AddButton from '../../assets/AddButton'

import styles from './styles.css'

class AddTask extends React.Component {
  state = {
    title: '' 
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { title } = this.state
    this.props.onCreate(title)
    this.changeTitleState('')
  }

  changeTitleState = title => {
    this.setState({ title })
  }

  handleTitleChange = (e) => {
    this.changeTitleState(e.target.value)
  }

  render() {
    return (
      <React.Fragment>
      <AddButton />
      <form className={styles.form} onSubmit={this.onSubmit}>
        <input onChange={this.handleTitleChange} value={this.state.title} className={styles.input} type="text" />
      </form>
      </React.Fragment>
    )
  }
}

export default AddTask
