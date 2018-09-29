import React from 'react';
import styles from './detailpage.css';
import Nav from './Nav.js'
import star from './../imgs/icon-star.svg'
import moreInfo from './../imgs/icon-more-info.svg'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToList, watchFireBaseMyListRef, deleteFromFirebase, handleSubmitComplete } from './../actions';
import EditModal from './EditModal';
import EditGrade from './EditGrade';
import Notes from './Notes';
import greencheck from './../imgs/greencheck.svg';
import checkmark from './../imgs/checkmark.svg';
import noimg from './../imgs/noimg.png';


class DetailPage extends React.Component {
constructor(props){
  super(props);
  this.state = {
    notesModal: false,
    completed: false,
    deleted: false,
    gradeModal: false
  }
  this.handleNotesModal = this.handleNotesModal.bind(this);
  this.handleGradeModal = this.handleGradeModal.bind(this);
}

handleNotesModal(){
  this.setState(prevState => ({
    notesModal: !prevState.notesModal
  }));
}

handleGradeModal(){
  this.setState(prevState => ({
    gradeModal: !prevState.gradeModal
  }))
}

handleCompleted(){
  this.setState(prevState => ({
    completed: true
  }));
}

handleDeleted(){
  this.setState(prevState => ({
    deleted: true
  }));
}

render() {



  const {myRoutes, route, routeId, pitches, routeName, rating, location, routeList } = this.props;
  console.log(route.firebaseId);

  let completedStyle = {
    backgroundImage: `url(${checkmark})`
  }
  let routeImage = {
    backgroundImage: `url(${route.imgMedium})`
  }
  if (route.complete || this.state.completed) {
    completedStyle = {
      backgroundImage: `url(${greencheck})`
    }
  }

  let myRouteCheck = [];
  let editModalVisible = null;
  let starArray = [];
  let starCounter = parseInt(route.stars)
  let gradeButton = null;
  let completeButton = null;
  let notesButton = null;
  let deleteButton = null;
  let addToListButton = <div onClick={()=> this.props.dispatch(addToList(route, this.props.myList))} className={styles.bottomButton1}><p><span className={styles.brightGreen}>Add to List</span></p></div>


  while (starCounter > 0) {
    starCounter --
    starArray.push(star)
  }

  this.props.myList.forEach((myRoute) => {
    myRouteCheck.push(myRoute.firebaseId)
  })

  if (route.imgMedium === '') {
    routeImage = null;
  }

  if (myRouteCheck.includes(route.firebaseId) && this.state.notesModal) {
    editModalVisible = <Notes
      onNotesModal={this.handleNotesModal}
      firebaseId={route.firebaseId}
      routeName={route.name}
      notes={route.note}/>

    } else if (myRouteCheck.includes(route.firebaseId) && this.state.gradeModal) {
      editModalVisible = <EditGrade
                        firebaseId={route.firebaseId}
                        rating={rating}
                        onGradeModal={this.handleGradeModal}/>
                        console.log(editModalVisible);
    } else if (myRouteCheck.includes(route.firebaseId)){

      gradeButton = <div onClick={()=> this.handleGradeModal()} className={styles.topButton1}><p><span className={styles.brightGreen}>Grade</span></p></div>

      completeButton = <div style={completedStyle} onClick={()=>{ this.handleCompleted(); this.props.dispatch(handleSubmitComplete(route.firebaseId))}} className={styles.topButton2}><p><span className={styles.brightGreen}>Complete</span></p></div>

      notesButton = <div onClick={()=>this.handleNotesModal()} className={styles.topButton3}><p><span className={styles.brightGreen}>Notes</span></p></div>

      deleteButton = <Link to='/myList'><div onClick={()=> {deleteFromFirebase(route.firebaseId, this.props.myList); this.handleDeleted()}} className={styles.bottomButton2}><p><span className={styles.brightGreen}>Delete</span></p></div></Link>

      addToListButton = null;
    } else {
      editModalVisible = null;
    }
    return (
      <div className={styles.detailPageBackdrop}>
        <div className={styles.modalOverlay}>
          <div className={styles.detailPageWrapper}>
            <Nav/>
            <div className={styles.detailInfoBox}>
              <div className={styles.detail}><h3>{routeName}</h3></div>
              <div className={styles.detail}><p>{route.type} - </p><p> - {rating}</p></div>
              <div className={styles.detail}><p>{location}</p></div>
              <div className={styles.detail}><p><span className={styles.brightGreen}>Pitches: {pitches}</span></p></div>
              <div className={styles.starWrapper}>
                {starArray.map((star, i)=>
                  <div className={styles.detail} key={i}><img src={star}/></div>
                )}
              </div>
              <div className={styles.detail} className={styles.infoButton}><a href={route.url}> <button>More Info</button></a></div>
            </div>
            <div style={routeImage} className={styles.routeImage}>
            </div>
            <div className={styles.buttonBackdrop}>
              <div className={styles.topButtons}>
                {gradeButton}
                {completeButton}
                {notesButton}
              </div>
              <div className={styles.bottomButtons}>
                {deleteButton}
                {addToListButton}
              </div>

            </div>
            {editModalVisible}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullList: state.fullList,
    myList: state.myList,
    filteredList: state.filteredList
  }
}

export default connect(mapStateToProps)(DetailPage);
