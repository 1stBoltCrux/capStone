import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './components/Home.js';
import List from './components/List.js';
import MyList from './components/MyList.js'
import  Nav from './components/Nav.js';
import DetailPage from './components/DetailPage.js';
import  EditModal from './components/EditModal.js';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addListToFirebase, watchFireBaseFullListRef, watchFireBaseMyListRef, watchFireBaseUsersRef, addToList} from './actions'

class App extends Component {
  componentDidMount(){
    this.props.watchFireBaseFullListRef()
    this.props.watchFireBaseMyListRef()
    this.props.watchFireBaseUsersRef()
  }

  render() {
    const routes = this.props.fullList
    const myRoutes = this.props.myList
    const filteredList = this.props.filteredList
    const modalState = this.props.modalState
    const userList = this.props.userList
    return (
      <div className='main-wrapper'>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/myList" exact component={()=> <MyList myRoutes={myRoutes} modalState={modalState}/> }/>
              <Route path="/" exact component={()=><Home routes={routes}
              userList={userList}
              myRoutes={myRoutes} />}/>
              <Route path="/list" render={()=> <List modalState={modalState} myRoutes={myRoutes} routes={routes} filteredList={filteredList}/>}/>
              <Route path ="/detailpage" exact component={DetailPage}/>
              <Route path ="/editmodal" exact component={EditModal}/>
            </Switch>
          </div>
      </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fullList: state.fullList,
    myList: state.myList,
    filteredList: state.filteredList,
    modalState: state.modalState,
    userList: state.userList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    watchFireBaseMyListRef: watchFireBaseMyListRef,
    watchFireBaseFullListRef: watchFireBaseFullListRef,
    watchFireBaseUsersRef: watchFireBaseUsersRef},
     dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
