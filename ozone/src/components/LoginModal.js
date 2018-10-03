import React, {Component} from 'react';
import styles from './loginmodal.css';
import { googleSignIn, googleSignOut } from './../actions'
import { connect } from 'react-redux'
import logo from './../imgs/zone-logo.svg'

class LoginModal extends Component {

  render(){
    if (this.props.loginModalState === false) {
      return(
        <div className={styles.LoginModalBackdrop}>
          <div className={styles.loginModalOverlay}>
            <div className={styles.loginModalContent}>
                <div className={styles.buttonContainer}>
                <div className={styles.loginButton} onClick={() => this.props.dispatch(googleSignIn())}>Login with Google</div>
                <img className={styles.logoImage} src={logo}/>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default connect()(LoginModal)
