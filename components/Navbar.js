import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/profiles">
          <a>Profile</a>
        </Link>
        <Link href="/coins">
          <a>Coins</a>
        </Link>
      </div>
    </div>
  )
}
