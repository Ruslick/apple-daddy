import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <AiOutlineMenu color='black' size={40}/>
      
    </header>
  )
}
