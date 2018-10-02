import constants from './../constants';
const {c} = constants;

const MyListReducer = (state = [], action) => {
  switch(action.type) {
    case c.ADD_TO_LIST: {
      let checkId = [];
      let newState = state.slice();
      newState.forEach((elem) => {
        checkId.push(elem.id)
      });
      if (newState.length <= 0) {
        newState.push(action.route)

      } else if (checkId.includes(action.route.id)){
        return newState;
      } else {
        newState.push(action.route)
      }
      function compare(a,b){
        if (a.name < b.name)
        return -1;
        if (a.name > b.name)
        return 1;
        return 0;
      }
      newState.sort(compare);
      return newState;
    }

    case c.SET_MY_LIST: {
        const myList = [];
        if (action.payload){
          console.log(action.payload);
          Object.keys(action.payload).forEach((key) => {
            //this is where i get my firebase id in myList
            const newObject = Object.assign(action.payload[key], { firebaseId : key});
            myList.push(newObject);
          })
        } else {
          return myList;
        }

      return myList;
    }
    case c.NOTES: {
      return state;
    }
    case c.COMPLETE: {
      return state;
    }
    case c.CHANGE_GRADE:
      return state;
    default:
    return state
  }
}

export default MyListReducer;
