import { combineReducers } from 'redux';
import FullListReducer from './FullListReducer';
import MyListReducer from './MyListReducer';
import FilteredListReducer from './FilteredListReducer';
import ModalReducer from './ModalReducer'
import UserListReducer from './UserListReducer'
import LoginModalReducer from './LoginModalReducer'

const rootReducer = combineReducers({
  fullList: FullListReducer,
  myList: MyListReducer,
  filteredList: FilteredListReducer,
  modalState: ModalReducer,
  loginModalState: LoginModalReducer,
  userList: UserListReducer

})

export default rootReducer;
