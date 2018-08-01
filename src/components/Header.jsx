import React from 'react'

import AccountLogo from './assets/AccountLogo'
import LogoNoText from './assets/LogoNoText'

import styles from './Header.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mainLogo}>
        <LogoNoText />
      </div>
      <AccountLogo />
    </header>
  )
}

export default Header
