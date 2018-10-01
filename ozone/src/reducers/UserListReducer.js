import constants from './../constants';
const { c } = constants

const UserListReducer = (state = {}, action) => {
  switch (action.type) {

    case c.USER_RECEIVED:
    console.log(action.userList);
      return action.userList
    default:
      return state
  }
}

export default UserListReducer
