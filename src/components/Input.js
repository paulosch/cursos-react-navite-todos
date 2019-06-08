import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default Input = ({ onChangeText, value }) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}/>
)

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 15,
    }
})