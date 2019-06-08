import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

import TodoForm from './components/TodoForm'
import roorReducer from './reducers'
import TodoList from './components/TodoList';

const store = createStore(roorReducer, devToolsEnhancer())

export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})