import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import styles from "./styles.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        ©Michael Lorzing 2019
      </p>
    </footer>
  )
}
