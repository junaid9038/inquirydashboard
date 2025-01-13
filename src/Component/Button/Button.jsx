import React from 'react'
import {MdMessage} from "react-icons/md"
import styles from './Button.module.css'

export default function Button(props) {
    const{isOutline,icon,text,...rest} = props; // distructuring of props

  return (
    <button {...rest}
    
     className={isOutline? styles.secondry_btn: styles.primary_btn}>
      
      {icon}
      {text}
    </button>
  )
}
