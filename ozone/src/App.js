import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './components/Home.js';
import List from './components/List.js';
import  Nav from './components/Nav.js';
import DetailPage from './components/DetailPage.js';
import  EditModal from './components/EditModal.js';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='main-wrapper'>
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/list" exact component={List}/>
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
    fullList: state
  }
}

 fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200285890-fbff6471f00c42d4b58bbfed57cd6a12').then(
    response => response.json(),
    error => console.log('an error occured.', error)
  ).then(function(json){
    console.log('this is the api respone:', json)
  });


export default withRouter(connect(mapStateToProps)(App));
