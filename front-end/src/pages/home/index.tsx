import React, { useContext } from 'react'
import { ProductCard } from '../../components/product-card'
import { ToTop } from '../../components/ui/to-top'
import { Store } from '../../contexts/store'
import styles from './Home.module.css'

export const Home = () => {
  const store = useContext(Store)
  if (!store) return null
  return (
    <main className={styles.homeWrapper} >
      {store.map((p: any) => {
        return  <ProductCard key={p._id} product={p}/>
      })}
      <ToTop />
    </main>

  )
}
