import React from 'react';
import ReactDom from 'react-dom';
import styles from './notes.css';
import { handleSubmitNotes } from './../actions'
import { connect } from 'react-redux'

function Notes(props){
  const {firebaseId} = props;
  let dynamicNotes = null;
  props.myList.forEach((route)=>{
    if(route.firebaseId === firebaseId){
      console.log(route.firebaseId);
      console.log(firebaseId);
      dynamicNotes = route.note;
    }
  })
  console.log(dynamicNotes);
  let _note = null;
  return (
    <div className={styles.notesWrapper}>
      <div className={styles.modalContent}>
      <div className={styles.topBar}>
        <div className={styles.editHeader}>
          <h3>Add Notes to {props.name}</h3>
        </div>
      <div className={styles.closeButton}></div>
      </div>
      <div className={styles.notesArea}>
        <textarea ref={(textarea) => {_note = textarea;}}/>
        <button type='submit' onClick={()=> handleSubmitNotes(_note, firebaseId)}>Submit Notes</button>
      </div>
      <p>{dynamicNotes}</p>
    </div>
      <div className={styles.bottomLogo}></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fullList: state.fullList,
    myList: state.myList,
    filteredList: state.filteredList
  }
}

export default connect(mapStateToProps)(Notes);
