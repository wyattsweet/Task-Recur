import React from 'react'

import LogoNoText from './assets/LogoNoText'
import { MyContext } from './Provider'

import styles from './Header.css'

const Header = () => {
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <header className={styles.header}>
            <LogoNoText />
          </header>
        )
      }}
    </MyContext.Consumer>
  )
}

export default Header
