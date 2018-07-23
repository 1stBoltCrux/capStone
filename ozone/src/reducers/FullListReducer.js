import constants from './../constants';
const { c } = constants

const FullListReducer = (state = {}, action) => {
  switch(action.type) {
    case c.RECEIVED: {
      const fullList = [];
      // const fullList = Object.assign({}, action.payload);
      // console.log(action.fullList);
      Object.keys(action.fullList).forEach((key) => {
        fullList.push(action.fullList[key].route);
      })
      console.log(fullList);

      // fullList.forEach((route) => {
      //   if (route.pitches === '') {
      //     route.pitches = 1;
      //   }
      //    let newRouteRating = route.rating.slice(2,4)
      //    route.starVotes = parseFloat(newRouteRating);
      //    if (route.location[3]) {
      //      let trimmedLocation = route.location[3].slice(4,route.location[3].length)
      //      route.location[2] = route.location[2] + ', ' + trimmedLocation;
      //    }
      //
      // })

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
