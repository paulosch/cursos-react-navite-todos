import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

import Input from './Input';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends Component {

    onChangeText(text) {
        this.props.setTodoText(text)
    }

    onPress() {
        const { todo } = this.props

        if(todo.id)
            this.props.updateTodo(todo)
        else
            this.props.addTodo(todo.text)
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.todo.text}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title={this.props.todo.id ? 'save' : 'add'}
                        onPress={() => this.onPress()}
                        on/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 15,
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
})

const mapStateToProps = state => {
    return { todo: state.todo }
}

const mapDispachToProps = {
    addTodo,
    setTodoText,
    updateTodo
}

export default connect(mapStateToProps, mapDispachToProps)(TodoForm)