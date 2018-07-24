import React from 'react';
import ReactDom from 'react-dom';
import styles from './listitem.css';
import star from './../imgs/icon-star.svg'
import {Link} from 'react-router-dom';
import { deleteFromFirebase } from './../actions';
/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

class ListItem extends React.Component {

  render() {
    let starArray = [];
    let starCounter = parseInt(this.props.route.stars);
    while (starCounter > 0) {
      starCounter --
      starArray.push(star)
    }


    if (this.props.type === 'Trad' || this.props.type === 'Trad, TR') {
      styles.itemType = styles.trad
    } else if (this.props.type === 'Sport'){
      styles.itemType = styles.sport
    } else {
      styles.itemType = styles.mixed
    }
    return (
      <Link to={{
        pathname: '/detailpage',
        state: {
          route: this.props.route,
          name: this.props.name,
          rating: this.props.rating,
          location: this.props.location,
          pitches: this.props.pitches,
          routeId: this.props.routeId,
          routeList: this.props.routeList,
          myRoutes: this.props.myRoutes
        }

      }}><div  className={styles.listItemWrapper}>
        <div className={styles.itemType}></div>
        <div className={styles.itemInfoBox}>
          <div className={styles.itemInfo}>
            <h3>{this.props.name}</h3>
            <p> {this.props.rating} </p>
            <p>{this.props.location}</p>
            <div className={styles.starWrapper}>
              {starArray.map((star)=>
                <img src={star}/>
              )}

            </div>
          </div>
          <div className={styles.expandButton}></div>

        </div>

      </div></Link>
    );
  }
}

export default ListItem;
