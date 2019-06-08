import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default ({ todo, onPressTodo, onLongPressTodo }) => {
    return (
        <TouchableOpacity 
            onPress={onPressTodo} 
            onLongPress={onLongPressTodo}>
            <View style={styles.line}>
                <Text style={[styles.lineText, todo.done ? styles.done : null]}>
                    {todo.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    done: {
        textDecorationLine: 'line-through'
    }
})