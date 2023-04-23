import styles from  './Navigation.module.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Navigation = () => {
    const brandStyle={
        color:"#fff",
        textdecoration:'none',
        fontWeight:'bold',
        fontSize:'22px',
        display:'flex',
        alignItem:'center'
    }

    const logotext = {
        marginLeft:'10px'
    }

  return (
    <nav className={`${styles.navbar} container`}>
        <Link style={brandStyle} to="/">
            <img src="/images/logo.png" alt="logo" />
            <span style={logotext}>Fresh Farms</span>
        </Link>
    </nav>
  )
}

export default Navigation