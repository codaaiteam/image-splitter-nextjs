import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

function Card(props) {
  return (
    <div className={styles.card}>
        <Image src={props.src} height={70} width={70} alt={props.alt}/>
        <h5>{props.head}</h5>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Card