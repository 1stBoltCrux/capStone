import React from 'react';
import ReactDom from 'react-dom';
import styles from './list.css';
import Nav from './Nav.js';
import ListItem from './ListItem.js';
import { v4 } from 'uuid';

class List extends React.Component {

  render() {
    const { routes, filteredList } = this.props
    let routeCondition = routes.slice();
    if (filteredList.length > 0) {
      routeCondition = filteredList;
    }
    return (
      <div className={styles.listWrapper}>
        {routeCondition.map((route, key) =>
          <ListItem
            myRoutes={this.props.myRoutes}
            routeList={this.props.routes}
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

      </div>
    );
  }
}

export  default List;
