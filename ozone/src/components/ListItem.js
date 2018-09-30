import React from 'react';
import ReactDom from 'react-dom';
import styles from './listitem.css';
import star from './../imgs/icon-star.svg'
import {Link} from 'react-router-dom';
import { deleteFromFirebase } from './../actions';
import DetailPage from './DetailPage'
import {v4} from 'uuid'
import { detailModal } from './../actions/index'
import { connect } from 'react-redux';
/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

class ListItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      detailPage: false
    }
  }

  handleDetailPage = () => {
    this.setState({
      detailPage: !this.state.detailPage
    })
  }

  render() {
    console.log(this.props);
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
        <div>


        <div onClick={()=> this.props.dispatch(detailModal(this.props.routeId))}  className={styles.listItemWrapper}>
          <div className={styles.itemType}></div>
          <div className={styles.itemInfoBox}>
            <div className={styles.itemInfo}>
              <h3>{this.props.name}</h3>
              <p> {this.props.rating} </p>
              <p>{this.props.location}</p>
              <div className={styles.starWrapper}>
                {starArray.map((star, i)=>

                  <img src={star} key={v4() }/>
                )}

              </div>
            </div>
            <div className={styles.expandButton}></div>

          </div>

          </div>
          <DetailPage
            onDetailPage={this.handleDetailPage}
            route={this.props.route}
            routeName={this.props.name}
            rating={this.props.rating}
            location={this.props.location}
            pitches={this.props.pitches}
            routeId={this.props.routeId}
            routeList={this.props.routeList}
            myRoutes={this.props.myRoutes}/>
        </div>
        );



  }
}

export default connect()(ListItem)
