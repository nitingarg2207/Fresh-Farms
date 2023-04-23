import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Button from '../../components/shared/Button/Button'
import Card from '../../components/shared/Card/Card'
import styles from './Home.module.css'

const Home = () => {
  const Navigate = useNavigate()
  const signInLinkStyle = {
    color:'#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px'
  }

  function startRegister(){
    console.log("Button clicked .......")
    Navigate('/authenticate')
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Freshfarms!" icon="logo">
      <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone!
          we wrap up the finishing touches, we're adding people gradually
          to make sure nothing break
        </p>
      <div>
          <Button onClick={startRegister} text="Let's Go">
          </Button>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
        </div>
      </Card>
      {/* <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <img src="/images/logo.png" alt="logo" />
          <h1 className={styles.heading}>Welcome to Freshfarmms!</h1>
        </div>
        <p className={styles.text}>
          We 're sorking hard to get Codershouse ready for everyone!
          we wrap up the finishing youches, we're adding people gradually
          to nake sure nothing break
        </p>
        <div>
          <button>
            <span>Get your username</span>
            <img src="/images/arrow.png" alt="arrow" />
            <Link to="logi"></Link>
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Home