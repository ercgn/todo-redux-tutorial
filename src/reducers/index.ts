import { combineReducers } from 'redux';
import todosReducer from '../slices/todoSlice';
import visibilityFilterReducer from '../slices/filtersSlice';

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
