import  React from 'react';
import ReactDOM from 'react-dom';
import styles from './home.css';
import { connect } from 'react-redux';
import { handleSubmitClick } from './../actions'
import { Link } from 'react-router-dom';
import { googleSignIn, signInRedirectComplete, watchFireBaseMyListRef, signInCheck, googleSignOut, detailModal } from './../actions'
import LoginModal from './LoginModal'



class Home extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (this.props.loginModalState === true) {

            this.props.dispatch(signInCheck())

    }

    console.log('firing');
if ( this.props.userList && Object.keys(this.props.userList).length > 0 ) {
  setTimeout(()=> {
    this.props.dispatch(signInRedirectComplete(this.props.userList))
  }, 1000)
// i set the timer down from 5000
  } else {

  }
  // this.props.dispatch(watchFireBaseMyListRef())
}

  render () {
    console.log(this.props);
    const { routes } = this.props;

    return (
      <div  className={styles.homeWrapper}>
        <div className={styles.filters}>
          <div className={styles.filterRoute}>
            <div className={styles.filterBox} id="filterTitle"><h3 style={{margin: 'auto'}}>Route Finder</h3></div>

            <div className={styles.filterBox}><p>name:</p><input type='text' value={undefined} ref={input => this._name = input}></input></div>

            <div className={styles.filterBox}><p>grade:</p>
            <select ref={input => this._grade = input}>
              <option value={null}></option>
              <option value='6'>5.6</option>
              <option value='7'>5.7</option>
              <option value='8'>5.8</option>
              <option value='9'>5.9</option>
              <option value='10'>5.10</option>
              <option value='11'>5.11</option>
              <option value='12'>5.12</option>
              <option value='13'>5.13</option>
            </select></div>
            <div className={styles.filterBox}><p>type:</p>
            <select ref={input => this._type = input} >
              <option value={null}></option>
              <option value='Sport'>Sport</option>
              <option value='Trad'>Trad</option>
              <option value='Trad, Sport'>Mixed</option>
            </select></div>
          </div>
          <Link to ="/list"><div onClick={()=> this.props.dispatch(detailModal(''))}>
          <div onClick={()=> this.props.dispatch(handleSubmitClick(this._name.value, this._type.value, this._grade.value, routes))} className={styles.filterRouteButton}><p>Search Routes</p></div>
        </div></Link>
          <div style={{color: '#af4731', borderColor: '#af4731'}} className={styles.filterRouteButton} onClick={()=> this.props.dispatch(googleSignOut())}>Log Out</div>

        </div>

        <div className={styles.loginModalContainer}>
          <LoginModal
          loginModalState={this.props.loginModalState}/>
        </div>
    </div>
    )
  }
}

export default connect()(Home);
