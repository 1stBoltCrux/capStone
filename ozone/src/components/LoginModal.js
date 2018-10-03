import React, {Component} from 'react';
import styles from './loginmodal.css';
import { googleSignIn } from './../actions'
import { connect } from 'react-redux'

class LoginModal extends Component {

  render(){
    console.log(this.props.loginModalState);
    if (this.props.loginModalState) {
      return(
        <div>
            <button onClick={() => this.props.dispatch(googleSignIn())}>CLICK ME</button>
        </div>
      )
    } else {
      return null
    }

  }
}

export default connect()(LoginModal)
