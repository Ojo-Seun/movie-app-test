import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  


  useEffect(() => {
    console.log(data)
  },[data])


  return (
    <div className={styles.container}>
      <Head>
        <title>Movies Test App</title>
        <meta name="description" content="Movies Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}><div className={styles.headerText}>MyTestApp</div></header>

        <div className={styles.hero}><div className={styles.heroText}>Watch something increadible</div></div>

        <div className={styles.searchWrapper}>
          <div className={styles.search}>
            <label htmlFor='search'>Search</label>
            <input type='text' name='search' id='search'/>
          </div>
        </div>

        <div className={styles.gridWrapper}>
          <div className={styles.category}>Movies Categories Name</div>

        </div>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export const getServerSideProps = async() => {
  
  const key = process.env.KEY


  try {
    
    const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&`)
    const data = await res.json()
  
    
   
    return {
      props: {
        data
      }
    }
  } catch {
    return {
      notFound:true
    }
  }
}