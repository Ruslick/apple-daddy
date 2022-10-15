import React from 'react'
import { Typography } from '../Typography'

import styles from './Button.module.scss'

export const Button: React.FC<{children: string, variant?: 'primary' | 'secondary' | 'link'}> = ({children, variant = 'primary'}) => {
  return (
  <button className={styles[variant]}>{children}</button>
  )
}
