import constants from './../constants';
const { c } = constants

const LoginModalReducer = (state = true, action) => {
  switch (action.type) {

    case c.HANDLE_LOGIN_MODAL:
      return {
        loginModalOpen: false
      }
    case 'HIDE_MODAL':
      return state
    default:
      return state
  }
}

export default LoginModalReducer
