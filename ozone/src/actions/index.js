import constants from './../constants';
import firebase from 'firebase';
const { c, firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
const fullListRef = firebase.database().ref('fullList');
const myListRef = firebase.database().ref('myList');
const userRef = firebase.database().ref('users')

export function googleSignOut(){
  return function(dispatch){
    firebase.auth().signOut()
  }
}

export function signInCheck(){
  return function(dispatch){
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (!user) {
        dispatch(openLoginModalHandler())
      } else {
        dispatch(closeLoginModalHandler())
      }
    })
  }
}

export function googleSignIn(){
  return function(dispatch){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(function(result) {
    }).catch(function(error) {
      console.log(error);
    });
  }
}

export function signInRedirectComplete(userList){
  return function(dispatch) {

    firebase.auth().getRedirectResult().then(function(result) {
      let userIdArray = [];
      Object.keys(userList).forEach((userKey) => {
        userIdArray.push(userList[userKey].user.uid)
      })
      if (!userIdArray.includes(result.user.uid)) {

        var newUser = {
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          userList: ''
        }
        userRef.child(result.user.uid).set({
          user: newUser
        })
      } else {
        return;
      }

    }).catch(function(error) {
      console.log('NEW USER: ' + error);
    });
  }
}

export function watchFireBaseUsersRef() {

  return function (dispatch) {
    userRef.on('value', data => {
      let userList = data.val()
      dispatch(addUserListToFirebase(userList))
    })
  }
}

export function watchFireBaseFullListRef() {
  return function(dispatch) {
    fullListRef.on('value', data => {
      let list = data.val()
      dispatch(addListToFirebase(list))
    })
  }
}

export function addListToFirebase(list){
  return {
    type: c.RECEIVED,
    fullList: list
  }
}

export function addUserListToFirebase(userList){
  return {
    type: c.USER_RECEIVED,
    userList: userList
  }
}

export function watchFireBaseMyListRef(){
  return async function(dispatch) {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        // dispatch(loginModalHandler())
        let newRef = userRef.child(user.uid)
        newRef.on('value', data => {
          if (data.val()){
            let myList = data.val().user.userList
            dispatch(addMyListToFirebase(myList));

          }
        })
      }
    })
  }
}

export function openLoginModalHandler(){
  return {
    type: c.OPEN_LOGIN_MODAL,
  }
}

export function closeLoginModalHandler(){
  return {
    type: c.CLOSE_LOGIN_MODAL,
  }

}

export function addMyListToFirebase(myList){
  return {
    type: c.SET_MY_LIST,
    payload: myList
  }
}

export function detailModal(routeId){
  return {
    type: c.HANDLE_DETAIL_MODAL,
    payload: routeId
  }
}

export function addToList(route, myList){
  var user = firebase.auth().currentUser;
  let checkFireId = [];
  myList.forEach((routeCheck) => {
    checkFireId.push(routeCheck.id)
  })
  if (checkFireId.includes(route.id) === false && user !== null){
    let newRef = userRef.child(user.uid)
    let newestRef = newRef.child('user');
    let finalRef = newestRef.child('userList')
    finalRef.child(route.id).set(route)
  }
  return {
    type: c.ADD_TO_LIST,
    route: route,
    myList: myList
  }
}

export function deleteFromFirebase(key, myRoutes){
  var user = firebase.auth().currentUser;
  if (user !== null){
    let newRef = userRef.child(user.uid)
    let newestRef = newRef.child('user');
    let finalRef = newestRef.child('userList')
    finalRef.child(key).remove()
  }
}

export function handleSubmitNotes(_note, key){

  var user = firebase.auth().currentUser;
  if (user !== null){
    let newRef = userRef.child(user.uid)
    let newestRef = newRef.child('user');
    let finalRef = newestRef.child('userList')
    finalRef.child(key).update({
      note: _note.value
    })
  }

  return {
    type: c.NOTES,
    payload: _note
  }
}

export function handleSubmitComplete(key, complete){
  var user = firebase.auth().currentUser;
  if (user !== null){
    let newRef = userRef.child(user.uid)
    let newestRef = newRef.child('user');
    let finalRef = newestRef.child('userList')
    finalRef.child(key).update({
      complete: complete
    })
  }

  return {
    type: c.COMPLETE
  }
}

export function handleSubmitClick(_name, _type, _grade, routes) {
  return {
    type: c.FILTER,
    payload: {
      name: _name,
      type: _type,
      grade: _grade,
      routes: routes
    }
  }
}

export function emptyArray() {
  return {
    type: c.EMPTY_ARRAY
  }
}

export function handleSubmitRadio(event, grade, additionalGrade, key){
  event.preventDefault();
  if (additionalGrade === null){
    additionalGrade = '';
  }
  if (grade !== null) {


    const newGrade = grade + additionalGrade;
    var user = firebase.auth().currentUser;
    if (user !== null){
      let newRef = userRef.child(user.uid)
      let newestRef = newRef.child('user');
      let finalRef = newestRef.child('userList')
      finalRef.child(key).update({
        rating: newGrade
      })
    }
  }
  return {
    type: c.CHANGE_GRADE,
  }
}
