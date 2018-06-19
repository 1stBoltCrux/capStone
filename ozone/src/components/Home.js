import  React from 'react';
import ReactDOM from 'react-dom';
import './home.css';

class Home extends React.Component {
  render () {
    return (
      <div className='home-wrapper'>

        <div className='nav'>
          <div className='nav-button'><p>My List</p></div>
          <div className='nav-button'>Route List</div>
        </div>
        <div className='filters'>
          <div className='filter-route'>
            <div className='filter-box' id="filter-title"><p>Filter Routes</p></div>
          <div className='filter-box'><p>name:</p><input type='text'></input></div>
          <div className='filter-box'><p>grade:</p><select></select></div>
          <div className='filter-box'><p>type:</p><select></select></div>
        </div>

          <div className='filter-my-list'></div>
        </div>

    </div>
    )
  }
}

export default Home;
