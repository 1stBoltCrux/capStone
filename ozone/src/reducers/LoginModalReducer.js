import constants from './../constants';
const { c } = constants

const LoginModalReducer = (state = true, action) => {
  switch (action.type) {

    case 'OPEN_LOGIN_MODAL':
      return false

    case 'CLOSE_LOGIN_MODAL':
      return true
    default:
      return state
  }
}

export default LoginModalReducer
