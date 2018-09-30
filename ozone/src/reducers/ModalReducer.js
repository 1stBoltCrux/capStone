import constants from './../constants';
const { c } = constants

const ModalReducer = (state = '', action) => {
  switch (action.type) {

    case c.HANDLE_DETAIL_MODAL:
      console.log(state);
      return {
        modalOpen: action.payload
      }
    case 'HIDE_MODAL':
      return state
    default:
      return state
  }
}

export default ModalReducer
