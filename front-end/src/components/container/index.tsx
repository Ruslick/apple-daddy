import React from 'react'
import styles from './Container.module.scss'

export const Container: React.FC<{children: JSX.Element}> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
