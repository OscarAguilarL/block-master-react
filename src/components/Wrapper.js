import React from 'react'

import styles from '../assets/styles/Wrapper.module.css'

export const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
