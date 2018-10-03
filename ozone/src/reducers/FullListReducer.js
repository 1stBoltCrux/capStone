import constants from './../constants';
const { c } = constants

const FullListReducer = (state = [], action) => {
  switch(action.type) {
    case c.RECEIVED: {
      const fullList = [];
      Object.keys(action.fullList).forEach((key) => {
        const routeWithId = Object.assign(action.fullList[key].route, {firebaseId: key});
        fullList.push(routeWithId);
      })

      function compare(a,b){
        if (a.starVotes < b.starVotes)
        return -1;
        if (a.starVotes > b.starVotes)
        return 1;
        return 0;
      }
      fullList.sort(compare);
      return fullList;
    }
  }
  return state;
}

export default FullListReducer;
