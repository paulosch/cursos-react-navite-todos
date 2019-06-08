import { combineReducers } from 'redux'
import todoListReducer from './todoListReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    todos: todoListReducer,
    todo: todoReducer
})