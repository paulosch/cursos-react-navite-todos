import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, setEditingTodo }) => (
    <View style={styles.container}>
        {todos.map(todo => 
                <TodoListItem 
                    key={todo.id} 
                    todo={todo}
                    onPressTodo={() => toggleTodo(todo.id)}
                    onLongPressTodo={() => setEditingTodo(todo)} />
            )}
    </View>
)

const mapStateToProps = state => {
    const { todos } = state
    return { todos }
}

const mapDispatchToProps = {
    toggleTodo,
    setEditingTodo
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)