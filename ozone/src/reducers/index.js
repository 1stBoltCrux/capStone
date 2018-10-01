import { combineReducers } from 'redux';
import FullListReducer from './FullListReducer';
import MyListReducer from './MyListReducer';
import FilteredListReducer from './FilteredListReducer';
import ModalReducer from './ModalReducer'
import UserListReducer from './UserListReducer'

const rootReducer = combineReducers({
  fullList: FullListReducer,
  myList: MyListReducer,
  filteredList: FilteredListReducer,
  modalState: ModalReducer,
  userList: UserListReducer
})

export default rootReducer;
