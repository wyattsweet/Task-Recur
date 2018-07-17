import React from 'react'

import { MyContext } from './Provider'

import styles from './Header.css'

const Header = () => {
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <header className={styles.header}>
            <h1 className={styles.mainText}>Task Recur</h1>
            <span>Signed in as {context.user.email} </span>
            <button onClick={context.removeUser}>Sign Out</button>
          </header>
        )
      }}
    </MyContext.Consumer>
  )
}

export default Header
