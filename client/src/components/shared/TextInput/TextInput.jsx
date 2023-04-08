import React from 'react'
import styles from './TextInput.module.css'

const TextInput = (props) => {
  return (
    <div style={{textAlign: 'center'}} >
        <input type="text" className={styles.input} {...props} />
    </div>
  )
}

export default TextInput