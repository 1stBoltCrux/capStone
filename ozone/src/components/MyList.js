import React from 'react';
import ReactDom from 'react-dom';
import styles from './list.css';
import Nav from './Nav.js';
import ListItem from './ListItem.js';
import { v4 } from 'uuid';
import EmptyList from './EmptyList.js'

class MyList extends React.Component {
  render() {
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

export  default MyList;
