import React from 'react'
import styles from './gridrecommendation.module.css'
import Image from 'next/image'

function GridRecommendation(props) {
  return (
    <div className={styles.card}>
        <h5>{props.head}</h5>
        <h3>{props.title}</h3>
        <Image src={props.src} height={70} width={70} alt={props.alt}/>
    </div>
  )
}

export default GridRecommendation