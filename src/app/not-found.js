import React from 'react'
import styles from '@/app/styles/common.module.css'
import Link from 'next/link'

export default function NotFound() {
  return (
   <section className={styles.container}>
    <div className={styles.error_page} style={{flexDirection:'column'}}>
        <h1> 404</h1>
        <h2> Not found</h2>
        <p> Could not find requested resource</p>
        <Link href='/'><button> Go to Home Page</button></Link>
    </div>
   </section>
  )
}

