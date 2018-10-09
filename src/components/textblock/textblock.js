import React from 'react';
import ReactDom from 'react-dom'
import styles from './textblock.css'

console.log(styles)

export const TextBlock=(props)=>{
    return(
        <p className={styles.lol}>things are working</p>
    )
}