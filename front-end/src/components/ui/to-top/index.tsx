import React, { useEffect, useState } from 'react'
import { AiFillCaretUp } from 'react-icons/ai'

import styles from './ToTop.module.scss'

export const ToTop = () => {
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.scrollY)
    }
  }, [])

  const clickHander = () => {
    window.scrollTo(0, 0)
  }

  
  if (scrollY < 100) return null

  return (
    <button onClick={clickHander} className={styles.toTop} >
      <AiFillCaretUp />
    </button>
  )
}
