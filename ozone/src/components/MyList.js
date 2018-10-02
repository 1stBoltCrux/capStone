import React from 'react';
import ReactDom from 'react-dom';
import styles from './list.css';
import Nav from './Nav.js';
import { connect } from 'react-redux';
import ListItem from './ListItem.js';
import { v4 } from 'uuid';
import EmptyList from './EmptyList.js'
import { watchFireBaseMyListRef } from './../actions'

class MyList extends React.Component {

  render() {
      this.props.myRoutes.forEach((route)=>{
        console.log(route.route);
      })
    let emptyList = null;
    if (this.props.myRoutes.length <= 0) {
      emptyList = <EmptyList/>
    }
    return (
      <div className={styles.listWrapper}>
        {this.props.myRoutes.map((route) =>
          <ListItem
            modalState={this.props.modalState}
            type={route.type}
            route={route}
          pitches={route.pitches}
          routeId={route.id}
          name={route.name}
          rating={route.rating}
          location={route.location[2]}
          key={v4()}
          />
        )}
        {emptyList}

      </div>
    );
  }
}

export  default connect()(MyList);
