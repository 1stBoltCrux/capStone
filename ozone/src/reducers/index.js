import { combineReducers } from 'redux';
import FullListReducer from './FullListReducer';
import MyListReducer from './MyListReducer';
import FilteredListReducer from './FilteredListReducer';
import ModalReducer from './ModalReducer'

const rootReducer = combineReducers({
  fullList: FullListReducer,
  myList: MyListReducer,
  filteredList: FilteredListReducer,
  modalState: ModalReducer
})

export default rootReducer;
