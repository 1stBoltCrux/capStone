import  React from 'react';
import ReactDOM from 'react-dom';
import styles from './home.css';
import { connect } from 'react-redux';
import { handleSubmitClick } from './../actions'
import { Link } from 'react-router-dom';


class Home extends React.Component {

  render () {

    const { routes } = this.props;

    return (
      <div  className={styles.homeWrapper}>
        <div className={styles.filters}>
          <div className={styles.filterRoute}>
            <div className={styles.filterBox} id="filter-title"><p>Filter Routes</p></div>

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
              <option value='Mixed'>Mixed</option>
            </select></div>
          </div>
          <div onClick={()=> this.props.dispatch(handleSubmitClick(this._name.value, this._type.value, this._grade.value, routes))} className={styles.filterRouteButton}><p>Filter Route List</p></div>

          <div className={styles.filterMyList}>
            <div className={styles.filterRoute}>
              <div className={styles.filterBox} id="filter-title"><p>Filter My List</p></div>
            <div className={styles.filterBox}><p>name:</p><input type='text'></input></div>
            <div className={styles.filterBox}><p>grade:</p><select></select></div>
            <div className={styles.filterBox}><p>type:</p><select></select></div>
          </div>
          </div>
          <div className={styles.filterRouteButton}><p>Filter My List</p></div>
        </div>

    </div>
    )
  }
}

export default connect()(Home);
