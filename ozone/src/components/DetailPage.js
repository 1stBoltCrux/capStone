import React from 'react';
import ReactDom from 'react-dom';
import styles from './detailpage.css';
import Nav from './Nav.js'
import star from './../imgs/icon-star.svg'
import moreInfo from './../imgs/icon-more-info.svg'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToList } from './../actions'

class DetailPage extends React.Component {

  render() {
    const {route, routeId, pitches, name, rating, location } = this.props.location.state;
    return (
      <div className={styles.detailPageWrapper}>
        <div className={styles.detailInfoBox}>
            <div className={styles.detail}><h3>{name}</h3></div>
            <div className={styles.detail}><p>{rating}</p></div>
            <div className={styles.detail}><p>{location}</p></div>
            <div className={styles.detail}><p><span className={styles.brightGreen}>Pitches: {pitches}</span></p></div>
            <div className={styles.detail}><img src={star}/></div>
            <div className={styles.detail}><a href={route.url}><img src={moreInfo}/></a></div>
        </div>
        <div className={styles.routeImage}>
        </div>
        <div className={styles.buttonBackdrop}>
          <div className={styles.topButtons}>
            <Link to="/editmodal"><div className={styles.topButton1}><p><span className={styles.brightGreen}>Grade</span></p></div></Link>
            <Link to="/editmodal"><div className={styles.topButton2}><p><span className={styles.brightGreen}>Complete</span></p></div></Link>
            <Link to="/editmodal"><div className={styles.topButton3}><p><span className={styles.brightGreen}>Notes</span></p></div></Link>
          </div>
          <div className={styles.bottomButtons}>
            <div onClick={()=> addToList(this.props, route)} className={styles.bottomButton1}><p><span className={styles.brightGreen}>Add to List</span></p></div>
            <Link to="/editmodal"><div className={styles.bottomButton2}><p><span className={styles.brightGreen}>Rate</span></p></div></Link>
          </div>

        </div>

      </div>
    );
  }
}

export default connect()(DetailPage);
