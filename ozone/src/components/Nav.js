import React from 'react';
import ReactDom from 'react-dom';
import styles from './nav.css'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { emptyArray, detailModal} from './../actions';

class List extends React.Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div className={styles.navWrapper}>
        <div className={styles.nav}>
          <Link to ="/myList"><div onClick={()=> dispatch(detailModal(''))} className={styles.navButton}>My List</div></Link>
          <Link to ="/"><div onClick={()=> dispatch(emptyArray())}  className={styles.navButton}>Home</div></Link>
          <Link to ="/list"><div onClick={()=> dispatch(detailModal(''))} className={styles.navButton}>Route List</div></Link>
        </div>
      </div>
    );
  }
}

export  default connect()(List);
