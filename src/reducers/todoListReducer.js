import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, UPDATE_TODO } from "../actions";

const INITIAL_STATE = []

let nextId = 1

export default todoListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {id: nextId++, text: action.text, done: false}]
        case UPDATE_TODO:
            return state.map(todo => {
                if(todo.id === action.todo.id)
                    return action.todo
                
                return todo
            })
        case TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.todoId)
                    return {...todo, done: !todo.done}
                
                return todo
            })
        default:
            return state
    }
}