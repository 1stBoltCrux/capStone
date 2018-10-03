import constants from './../constants';
const { c } = constants

const FilteredListReducer = (state = {}, action) => {
  switch(action.type) {
    case c.FILTER: {
      let resultArray = [];
      const {routes, name, type, grade } = action.payload;
      let arrayToFilter = routes.slice();
      arrayToFilter.forEach((route) => {
        if (parseFloat(grade) === route.starVotes && route.type === type) {
          resultArray.push(route);
          return;
        } else if ( (name === route.name.toLowerCase() || route.name.toLowerCase().includes(name) )&& !grade && !type){
          resultArray.push(route);
          return;
        } else if (parseFloat(grade) === route.starVotes && !type && !name) {
          resultArray.push(route);
          return;
        } else if (type === route.type && !grade && !name) {
          resultArray.push(route);
          return;
        }
      })
        return resultArray;
    }
    case c.EMPTY_ARRAY: {
      const emptiedArray = []
      return emptiedArray;
    }
  }
  return state;
}

export default FilteredListReducer;
